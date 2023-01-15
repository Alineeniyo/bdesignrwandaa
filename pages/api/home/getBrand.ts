import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Popular_brand} from '../../../typing'
const query = groq`
  *[_type == "popular_brand"]
`
type Data = {
    brand:Popular_brand[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const brand:Popular_brand[] = await sanityClient.fetch(query);

  res.status(200).json({brand})
}
