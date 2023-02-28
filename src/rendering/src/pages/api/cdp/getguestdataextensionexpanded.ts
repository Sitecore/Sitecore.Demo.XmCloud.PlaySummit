import { NextApiHandler } from 'next';
import { cdpConfig } from './config';

const handler: NextApiHandler<unknown> = async (request, response) => {
  try {
    const resData = await fetch(
      `${cdpConfig.apiTargetEndpoint}/guests/${request.query.guestRef}?expand=ext${request.query.dataExtensionName}`,
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
