import { NextApiHandler } from 'next';
import { cdpConfig } from './config';

const handler: NextApiHandler<unknown> = async (_request, response) => {
  try {
    const resData = await fetch(
      `${cdpConfig.apiTargetEndpoint}/guests?expand=true&limit=50&offset=0&sort=lastSeen%3A%3ADESC&identityStatus=customer`,
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
