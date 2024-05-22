import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '../config/env';

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendMail = async ({ to, from, text, html, subject }) => {
  const msg = {
    to: to,
    from: from,
    text: text,
    html: html,
    subject: subject,
  };

  const response = await sgMail.send(msg);

  /* eslint-disable no-console */
  console.log(`⚡️[Send Mail]: response ${JSON.stringify(response, null, 2)}`);
  /* eslint-enable no-console */

  return response;
};
