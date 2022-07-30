import React from 'react'
const Pagination = ({pageIndex, setPageIndex, queryString,setQueryString}) => {
  
    const paginate =()=>{
        setPageIndex=""
      }
  
    return (
    <div>
        <button onClick={paginate}>back</button>
        <button onClick={paginate}>next</button>
    </div>
  )
}

export default Pagination