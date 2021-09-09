import type { NextPage } from 'next'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Header />
    </HomeLayout>
  )
}

export default Home
