/* eslint-disable camelcase */
import axios from 'axios'
import * as cheerio from 'cheerio'

import { url } from './URL'

export const animeContentHandler = async (id) => {
  const res = await axios.get(`${url.BASE_URL}${id}`)
  const body = await res.data
  const $ = cheerio.load(body)
  const promises = []

  $('div#wrapper_bg').each((index, element) => {
    const $element = $(element)
    const img = $element.find('div.anime_info_body_bg img').attr('src')
    const synopsis = $element.find('div.anime_info_body_bg p.type').eq(1).text()
    const genres = []
    $element
      .find('div.anime_info_body_bg p.type')
      .eq(2)
      .find('a')
      .each((j, el) => {
        const $el = $(el)
        const genre = $el.attr('href').split('/')[4]
        genres.push(genre)
      })
    const released = parseInt(
      $element.find('div.anime_info_body_bg p.type').eq(3).text().match(/\d+/g),
      10
    )
    const status = $element
      .find('div.anime_info_body_bg p.type')
      .eq(4)
      .text()
      .replace('Status:', '')
      .trim()
    const otherName = $element
      .find('div.anime_info_body_bg p.type')
      .eq(5)
      .text()
      .replace('Other name:', '')
      .trim()
    const liTotal = $('div.anime_video_body ul#episode_page li').length
    let totalEpisodes = parseInt(
      $('div.anime_video_body ul#episode_page li')
        .eq(liTotal - 1)
        .find('a')
        .text()
        .split('-')[1],
      10
    )
    if (!totalEpisodes) {
      totalEpisodes = parseInt(
        $('div.anime_video_body ul#episode_page li')
          .eq(liTotal - 1)
          .find('a')
          .text(),
        10
      )
    }

    const episodes = Array.from({ length: totalEpisodes }, (v, k) => {
      const animeId = `${id}-episode-${k + 1}`.slice(10)
      return {
        id: animeId,
      }
    })

    promises.push({
      img,
      synopsis,
      genres,
      released,
      status,
      otherName,
      totalEpisodes,
      episodes,
    })
  })
  return await Promise.all(promises)
}
