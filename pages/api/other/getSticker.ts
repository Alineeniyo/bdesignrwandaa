import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Sticker} from '../../../typing'
const query = groq`
  *[_type == "stiker"]
`
type Data = {
    sticker:Sticker[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const sticker:Sticker[] = await sanityClient.fetch(query);

  res.status(200).json({sticker})
}
