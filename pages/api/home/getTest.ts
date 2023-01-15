import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanity'
import {Testimonial} from '../../../typing'
const query = groq`
  *[_type == "testimonial"]
`
type Data = {
    testimonial:Testimonial[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const testimonial:Testimonial[] = await sanityClient.fetch(query);

  res.status(200).json({testimonial})
}
