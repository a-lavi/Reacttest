import { useState, useEffect } from "react";

function NewsList() {
  const [newsListData, setNewsListData] = useState([])
  useEffect(() => { getData() }, [])
  const getData = async () => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=`)
    console.log(response)
    if (response.ok) {
      const result = await response.json();
      console.log(result)
      setNewsListData(result)
    }
  }


  return (
    <div>
      <ul>
        {newsListData.map((news) => {
          console.log(news)
          return (
            <li>hey</li>
       
      )
      
      })}
     
      
      </ul>
    </div>

  )
}
export default NewsList;
