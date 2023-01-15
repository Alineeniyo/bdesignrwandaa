import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Wedodesc} from '../../../typing'
const query = groq`
  *[_type == "wedo_description"]
`
type Data = {
    wedod:Wedodesc[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const wedod:Wedodesc[] = await sanityClient.fetch(query);

  res.status(200).json({wedod})
}