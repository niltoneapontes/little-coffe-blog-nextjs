import { connectToDatabase } from '@/config/mongodb';
import { connect } from 'http2';

import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const slug = request.query.id;

  if(!slug) return response.json('Página não encontrada');

  const { client, db } = await connectToDatabase();

  if(client.isConnected()) {
    const pageViewBySlug = await db.collection('pageviews').findOne({ slug })

    let total = 0;
    
    if(pageViewBySlug) {
      total = pageViewBySlug.total;
    }

    return response.status(200).json({ total })
  }

  return response.status(500).json({ error: 'Database is not connected'})
}