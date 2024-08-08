import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const data = req?.query?.data;
  console.log(req);

  if (req) {
    alert('req' + req);
  }

  if (data) {
    console.log('Email data:', eval('(' + data + ')')?.email);
  }

  res.status(200).json({ message: req?.query?.data as string });
  if (res) {
    alert('res' + res);
  }
}
