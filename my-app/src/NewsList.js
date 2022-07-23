import { useState, useEffect } from "react";

function NewsList() {
  const [newsListData, setNewsListData] = useState([])
  useEffect(() => { getData() }, [])
  const getData = async () => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=(story,poll)`)
    console.log(response)
    if (response.ok) {
      const result = await response.json();
      console.log(result)
      setNewsListData(result.hits)
      
    }
    
  }
  console.log(newsListData)

  return (
    <div>
      <ul>
        {newsListData.map((news,index) => {
          console.log(news)
          return(
          
              <li key={index}>
                <a href={news.url}>{news.title}</a>
                </li>
          )})    
      }
     
      
      </ul>
    </div>

  )
}
export default NewsList;
