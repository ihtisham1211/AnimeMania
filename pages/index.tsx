import useSWR from 'swr'

import Layout from '../components/Layout'
import { Anime } from '../interfaces'
import { post } from '../utils/fetcher'

const IndexPage = () => {
  const { data, error, isValidating } = useSWR(
    ['api/onGoingSeries', { item: 10 }],
    post
  )

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="m-10">
        {isValidating
          ? 'loading...'
          : data.map((item: Anime) => {
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-start m-3 rounded border-2 border-primary"
                >
                  <img src={item.img} className="w-10 h-10" />
                  <span className="my-2">{item.title}</span>
                  <span className="my-2">{item.synopsis}</span>
                  <span className="my-2">{item.totalEpisodes}</span>
                  <span className="my-2">{item.otherName}</span>
                  <span className="my-2">{item.status}</span>
                </div>
              )
            })}
      </div>
    </Layout>
  )
}

export default IndexPage
