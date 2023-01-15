import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {New_post} from '../../../typing'
const query = groq`
  *[_type == "new_post"]
`
type Data = {
    post:New_post[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const post:New_post[] = await sanityClient.fetch(query);

  res.status(200).json({post})
}
