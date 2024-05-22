import { Response } from 'express';
import { Model, PipelineStage } from 'mongoose';
import { sendResponse } from '../sendResponse';

interface PaginationResult {
  total: number;
  totalPage: number;
  currentPage: number;
  perPage: number;
}

const paginateWithAggregate = async (
  model: Model<unknown>,
  per_page: number = 10,
  page: number = 10,
  aggregationPipeline: PipelineStage[],
  res: Response,
) => {
  const limit = per_page <= 0 ? 10 : per_page > 50 ? 10 : per_page;
  let currentPage = page ? (page <= 0 ? 1 : page) : 1;
  if (typeof currentPage !== 'number') {
    currentPage = 1;
  }
  const skip = (currentPage - 1) * limit;

  // try {
  const countAggregation = [...aggregationPipeline, { $count: 'count' }];

  const [countResult] = await model.aggregate(countAggregation);
  const totalCount = countResult ? countResult.count : 0;

  aggregationPipeline.push({ $skip: skip }, { $limit: limit });

  const documents = await model.aggregate(aggregationPipeline);

  const totalPage = Math.ceil(totalCount / limit);
  const paging: PaginationResult = {
    total: totalCount,
    totalPage,
    currentPage,
    perPage: limit,
  };
  return sendResponse(res, 200, documents, 'Items found', paging);
};

export default paginateWithAggregate;

// Usage:
// paginateWithAggregate(Users, 10, 10, [], res);
// paginate(Users, 10, 10, {}, {}, null, res);
// paginate(Users, per_page, page, sort, filter, null, res);
