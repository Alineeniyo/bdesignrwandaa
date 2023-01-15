import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Vision} from '../../../typing'
const query = groq`
  *[_type == "vision"]
`
type Data = {
    vision:Vision[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const vision:Vision[] = await sanityClient.fetch(query);

  res.status(200).json({vision})
}
