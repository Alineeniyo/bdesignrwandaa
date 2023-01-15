import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Wedonew} from '../../../typing'
const query = groq`
  *[_type == "wedo_new"]
`
type Data = {
    wedon:Wedonew[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const wedon:Wedonew[] = await sanityClient.fetch(query);

  res.status(200).json({wedon})
}