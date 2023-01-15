import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Wedo} from '../../../typing'
const query = groq`
  *[_type == "what_we_do"]
`
type Data = {
    wedo:Wedo[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const wedo:Wedo[] = await sanityClient.fetch(query);

  res.status(200).json({wedo})
}
