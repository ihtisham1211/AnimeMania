import { useEffect } from 'react'
import useSWR from 'swr'

import Layout from '../components/Layout'
import { post } from '../utils/fetcher'

const IndexPage = () => {
  const { data, error, isValidating } = useSWR(
    ['api/onGoingSeries', { item: 10 }],
    post
  )

  useEffect(() => {
    console.log(data, error, isValidating)
  }, [data, error, isValidating])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="m-10">
        {isValidating ? 'loading...' : JSON.stringify(data)}
      </div>
    </Layout>
  )
}

export default IndexPage
