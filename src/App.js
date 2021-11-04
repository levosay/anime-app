import React, { useEffect, useState } from 'react'
import classes from './App.module.css'
import Card from './components/card/Card'
import { fetchTemplate } from './utils/fetchTemplate'

const App = () => {
  const [siteData, setSiteData] = useState([])

  useEffect(() => {
    fetchTemplate('https://kitsu.io/api/edge/anime', 'get')
      .then((data) => setSiteData(data.data))
  }, [])

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
