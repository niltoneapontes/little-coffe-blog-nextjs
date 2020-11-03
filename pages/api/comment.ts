import { connectToDatabase } from '@/config/mongodb';

import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const {name, email, message} = request.query;

  const { client, db } = await connectToDatabase();

  if(client.isConnected()) {
      await db.collection('message').insertOne({ name, email, message })
    
    return response.status(200).json({ name, email, message })
  }

  return response.status(500).json({ error: 'Database is not connected'})
}