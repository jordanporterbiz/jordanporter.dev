import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview (req: NextApiRequest, res: NextApiResponse) {
    // TODO: Check the secret and next parameters
    // const { secret, slug } = req.query
    // if (secret !== process.env.SANITY_PREVIEW_SECRET || !slug) {
    //     return res.status(401).json({ message: 'Invalid token' })
    // }
    res.setPreviewData({})
    // TODO: Redirect to the path from the fetched post
   // res.redirect(slug)
    res.writeHead(307, { Location: '/' });
    res.end()
}