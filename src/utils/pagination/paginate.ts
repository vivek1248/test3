function splitString(str: string): string[] {
  if (str.includes(' ')) {
    return str.split(' ');
  } else {
    return [str];
  }
}

function hasMinusPrefix(str: string): boolean {
  if (str.startsWith('-')) {
    return true;
  } else {
    return false;
  }
}

function removeMinusPrefix(str: string): string {
  if (hasMinusPrefix(str)) {
    return str.slice(1);
  } else {
    return str;
  }
}

import { Response } from 'express';
import { Model, SortOrder } from 'mongoose';
import { sendResponse } from '../sendResponse';

const paginate = async (
  model: Model<unknown>,
  per_page: number = 10,
  page: number = 10,
  sort:
    | string
    | { [key: string]: SortOrder | { $meta } }
    | [string, SortOrder][]
    | undefined
    | null,
  searchCriteria: object,
  populateFields: string[] | null,
  res: Response,
  selectedFields: string[] | string | null = null,
) => {
  const limit = per_page <= 0 ? 10 : per_page > 50 ? 10 : per_page;
  let currentPage = page ? (page <= 0 ? 1 : page) : 1;
  if (typeof currentPage !== 'number') {
    currentPage = 1;
  }
  const skip = (currentPage - 1) * limit;

  const totalCount = await model.countDocuments(searchCriteria);

  const queryBuilder = model.find(searchCriteria).skip(skip).limit(limit);

  if (populateFields && Array.isArray(populateFields)) {
    populateFields.forEach((field) => {
      queryBuilder.populate(field);
    });
  }

  if (selectedFields && Array.isArray(selectedFields)) {
    const projection: { [key: string]: number } = {};
    selectedFields.forEach((field) => {
      projection[field] = 1;
    });
    queryBuilder.select(projection);
  }

  if (selectedFields && typeof selectedFields === 'string') {
    const selections = splitString(selectedFields);
    const projectionExclusion: { [key: string]: number } = {};
    const projectionInclusion: { [key: string]: number } = {};
    selections.forEach((field) => {
      if (hasMinusPrefix(field)) {
        projectionExclusion[removeMinusPrefix(field)] = 0;
      } else {
        projectionInclusion[field] = 1;
      }
    });
    queryBuilder.select(projectionExclusion);
    queryBuilder.select(projectionInclusion);
  }

  if (sort) {
    queryBuilder.sort(sort);
  } else {
    queryBuilder.sort({ created_at: -1 }); // Default sort by created_at
  }

  const documents = await queryBuilder.exec();
  const totalPage = Math.ceil(totalCount / limit);
  const paging = {
    total: totalCount,
    totalPage,
    currentPage,
    perPage: limit,
  };

  return sendResponse(res, 200, documents, 'Items found', paging);
};

export default paginate;

// Usage:
// paginateWithAggregate(Users, 10, 10, [], res);
// paginate(Users, 10, 10, {}, {}, null, res);
// paginate(Users, per_page, page, sort, filter, null, res);
