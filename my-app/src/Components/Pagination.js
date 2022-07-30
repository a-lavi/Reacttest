import React from 'react'
const Pagination = ({pageIndex, setPageIndex, queryString,setQueryString}) => {
  
    const paginate =()=>{
        setPageIndex=""
      }
  
    return (
    <div className="buttonflex">
        <button onClick={paginate} className="pagbutton">back</button>
        <button onClick={paginate} className="pagbutton">next</button>
    </div>
  )
}

export default Pagination