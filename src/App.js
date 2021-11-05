import React, { useEffect, useState } from 'react'
import classes from './App.module.css'
import Card from './components/card/Card'
import { fetchTemplate } from './utils/fetchTemplate'

const App = () => {
  const [siteData, setSiteData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching) {
      fetchTemplate(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${currentPage}`, 'get')
        .then((response) => {
          setSiteData(((prevData) => prevData.concat(response.data)))
          setCurrentPage((prevState) => prevState + 10)
        })
        .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    const { scrollHeight } = e.target.documentElement
    const { scrollTop } = e.target.documentElement
    const { innerHeight } = window
    if (scrollHeight - (scrollTop + innerHeight) < 100) setFetching(true)
  }
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <h1>LOGO</h1>
      </div>
      <div className={classes.content}>
        {siteData.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default App
