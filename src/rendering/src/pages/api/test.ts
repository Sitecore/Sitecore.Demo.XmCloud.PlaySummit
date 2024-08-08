import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log(req);
  if (req.method === 'POST') {
    const data = req.body;
    if (data && data.email) {
      console.log('Email data:', data.email);
      res.status(200).json({ message: `Email received: ${data.email}` });
    } else {
      res.status(400).json({ message: 'Email not found in the request body' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
