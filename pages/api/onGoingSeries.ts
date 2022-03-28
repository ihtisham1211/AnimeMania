import axios from 'axios'
import * as cheerio from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'

import { animeContentHandler } from '../../utils/api/animeContentHandler'
import { url } from '../../utils/api/URL'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = (await axios.get(`${url.BASE_URL}`)).data
    const $ = cheerio.load(body)
    const promises: any[] = []

    Array.from({ length: req.body.item || 5 }, (v, k) => {
      $('div.main_body div.series nav.menu_series ul li')
        .eq(k + 1)
        .each((index, element) => {
          const $element = $(element)
          const id = $element.find('a').attr('href')
          const title = $element.find('a').text()
          promises.push(
            animeContentHandler(id).then((extra) => ({
              title,
              img: extra[0].img,
              synopsis: extra[0].synopsis,
              genres: extra[0].genres,
              released: extra[0].released,
              status: extra[0].status,
              otherName: extra[0].otherName,
              totalEpisodes: extra[0].totalEpisodes,
              episodes: extra[0].episodes,
            }))
          )
        })
    })
    res.status(200).json(await Promise.all(promises))
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
