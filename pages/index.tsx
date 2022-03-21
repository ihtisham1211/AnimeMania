import { useEffect } from 'react'

import Layout from '../components/Layout'
import { fetcher } from '../utils/fetcher'

const IndexPage = () => {
  useEffect(() => {
    fetcher('api/v1/onGoingSeries')
      .then((d) => console.log(d))
      .catch((d) => console.log(d))
  }, [])

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="m-10">helo screen</div>
    </Layout>
  )
}

export default IndexPage
