import { SearchBar, Suggestion } from "@components/index"

const Home = () => {
  return (
    <div className='home-container'>
      <SearchBar varient="large" />
      <Suggestion />
    </div>
  )
}

export default Home
