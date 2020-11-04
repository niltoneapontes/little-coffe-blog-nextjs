import { connectToDatabase } from '@/config/mongodb';

import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { name, gender, age, message } = request.query;

  const { client, db } = await connectToDatabase();

  if(client.isConnected()) {
      await db.collection('message').insertOne({ name, gender, age, message })
    
    return response.status(200).json({ name, gender, age, message })
  }

  return response.status(500).json({ error: 'Database is not connected'})
}