import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Wedoboxes} from '../../../typing'
const query = groq`
  *[_type == "wedo_boxes"]
`
type Data = {
    wedob:Wedoboxes[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const wedob:Wedoboxes[] = await sanityClient.fetch(query);

  res.status(200).json({wedob})
}
