import { NextApiHandler } from 'next';
import { cdpConfig } from './config';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    const resData = await fetch(
      `${cdpConfig.apiTargetEndpoint}/guestContexts/${request.query.guestRef}?expand=items.sessions(offset%3A0%2Climit%3A100)&expand=items.events(offset%3A0%2Climit%3A10000)&source=all&timeout=30000`,
      {
        headers: cdpConfig.headers,
      }
    )
      .then((res) => res.text())
      .then((res) => JSON.parse(res));
    return response.status(200).json(resData);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export default handler;
