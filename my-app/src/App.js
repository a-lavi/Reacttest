import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NewsList from "./NewsList.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Users from './Components/Users';
import Items from './Components/Items';
import Search from './Components/Search';
import Pagination from './Components/Pagination';


function App() {


  const [newsListData, setNewsListData] = useState([])
  const [queryString, setQueryString] = useState(`https://hn.algolia.com/api/v1/search_by_date?tags=(story,poll)`)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [pageIndex, setPageIndex] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(0)
 

  useEffect(() => { getData() }, [queryString])
  const getData = async () => {
    setLoading(true)
    const response = await fetch(queryString)
    console.log(response)
    if (response.ok) {
      const result = await response.json();
      console.log(result)
      if (result.hits.length === 0) {
        setError("There isn't any data");
      }
      setNewsListData(() => result.hits)
      setPostsPerPage(()=> result.nbPages)
    }

    setLoading(false)
  }
  console.log(postsPerPage)
  
  // get current news
 /*  const lastPost = currentPost * postPerPage
  const firstPost= lastPost - postPerPage;
  const currentImages = memeObjs.slice(firstImage, lastImage)
  console.log(newsListData) */
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/users/:username" element={<Users />} />
        <Route path="/" element={<NewsList newsListData={newsListData} setQueryString={setQueryString} />} />
        <Route path="/items/:id" element={<Items />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Pagination 
      queryString={queryString} 
      setQueryString={setQueryString} 
      pageIndex={pageIndex} 
      setPageIndex={pageIndex} />
      <Footer />
    </div>
  )
}



export default App;
