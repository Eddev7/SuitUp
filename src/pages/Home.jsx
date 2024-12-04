import Search from '../components/Search/search'
import Products from '../components/Products/products'
import Loading from '../components/Loading/loading';
import { useState } from 'react';

function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      <Loading isLoad={isLoad}/>
      <Search onSearch={setSearchQuery} />
      <Products search={searchQuery} setIsLoad={setIsLoad} isLoad={isLoad}/>
    </>
  )
}

export default Home;
