import axios from 'axios'
import * as cheerio from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'

import { animeContentHandler } from '../../../utils/api/animeContentHandler'
import { url } from '../../../utils/api/URL'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = (await axios.get(`${url.BASE_URL}`)).data

    const $ = cheerio.load(body)
    const promises: any[] = []

    Array.from({ length: 30 }, (v, k) => {
      $('div.main_body div.series nav.menu_series ul li')
        .eq(k + 1)
        .each((index, element) => {
          const $element = $(element)
          const id = $element.find('a').attr('href')
          const title = $element.find('a').text()
          promises.push(
            animeContentHandler(id).then((extra) => ({
              title: title ? title : null,
              img: extra[0] ? extra[0].img : null,
              synopsis: extra[0] ? extra[0].synopsis : null,
              genres: extra[0] ? extra[0].genres : null,
              released: extra[0] ? extra[0].released : null,
              status: extra[0] ? extra[0].status : null,
              otherName: extra[0] ? extra[0].otherName : null,
              totalEpisodes: extra[0] ? extra[0].totalEpisodes : null,
              episodes: extra[0] ? extra[0].episodes : null,
            }))
          )
        })
    })
    const rest = await Promise.all(promises)
    console.log(rest)
    res.status(200).json({ helo: 'world' })
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
