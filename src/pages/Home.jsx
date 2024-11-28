import Search from '../components/Search/search'
import Products from '../components/Products/products'
import { useState } from 'react';

function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Search onSearch={setSearchQuery} />
      <Products search={searchQuery}/>
    </>
  )
}

export default Home;
