import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import classes from './App.module.css'
import Card from './components/card/Card'
import { fetchTemplate } from './utils/fetchTemplate'
import Favorite from './components/favorite/Favorite'
import Header from './components/header/Header'
import Detail from './components/detail/Detail'

const App = () => {
  const [siteData, setSiteData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [fetching, setFetching] = useState(true)
  const [inputVisible, setInputVisible] = useState(true)
  const [favorite, setFavorite] = useState([])
  const [detail, setDetail] = useState()
  const [valueSearch, setValueSearch] = useState('')
  const href = window.location.pathname
  const dataLocalStorage = JSON.parse(localStorage.getItem('favorite'))

  useEffect(() => {
    if (fetching && href === '/' && valueSearch === '') {
      fetchTemplate(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${currentPage}`, 'get')
        .then((response) => {
          setSiteData(((prevData) => prevData.concat(response.data)))
          setCurrentPage((prevState) => prevState + 20)
        })
        .finally(() => setFetching(false))
    }
    // eslint-disable-next-line
  }, [fetching])
  useEffect(() => {
    if (valueSearch.length > 0) {
      fetchTemplate(`https://kitsu.io/api/edge/anime?filter[text]=${valueSearch}`, 'get')
        .then((response) => {
          setSiteData(response.data)
        })
    }
    if (valueSearch.length === 0) {
      fetchTemplate('https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0', 'get')
        .then((response) => {
          setSiteData(response.data)
        })
    }
  }, [valueSearch])
  const scrollHandler = (e) => {
    const { scrollHeight } = e.target.documentElement
    const { scrollTop } = e.target.documentElement
    const { innerHeight } = window
    if (scrollHeight - (scrollTop + innerHeight) < 100) setFetching(true)
  }
  useEffect(() => {
    if (!localStorage.getItem('favorite') || !localStorage.getItem('favorite').length) {
      localStorage.setItem('favorite', JSON.stringify([]))
    }
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const addFavorite = (e, id, src, alt, title) => {
    setFavorite((prevList) => {
      if (prevList.find((item) => item.id === id)) return dataLocalStorage.push(prevList)
      localStorage.setItem('favorite', JSON.stringify([...dataLocalStorage, {
        id, src, alt, title
      }]))
      return [...prevList, {
        id, src, alt, title
      }]
    })
  }

  const removeFavorite = (e, id) => setFavorite((prevList) => {
    const index = dataLocalStorage.findIndex((item) => item.id === id)
    if (index !== -1) {
      localStorage.setItem('favorite', JSON.stringify(dataLocalStorage.filter((item) => item.id !== id)))
      return prevList.filter((item) => item.id !== id)
    }
  })

  const hiddenInput = (link) => {
    if (link === 'Home') setInputVisible(true)
    if (link === 'Favorite') setInputVisible(false)
  }
  const showDetail = (id) => {
    setInputVisible(false)
    if (siteData.find((item) => item.id === id)) setDetail(siteData.find((item) => item.id === id))
    else {
      fetchTemplate(`https://kitsu.io/api/edge/anime/${id}`, 'get')
        .then((response) => setDetail(response.data))
    }
  }

  return (
    <div className={classes.app}>
      <Header
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        hiddenInput={hiddenInput}
        inputVisible={inputVisible}
      />
      <Routes>
        <Route
          path="/favorite"
          element={
            dataLocalStorage ? (
              <div className={classes.content}>
                <Favorite
                  favorite={dataLocalStorage}
                  removeFavorite={removeFavorite}
                  showDetail={showDetail}
                />
              </div>
            )
              : (
                <div
                  style={{ textAlign: 'center', textTransform: 'uppercase' }}
                >
                  <h1>favorites list is empty</h1>
                </div>
              )
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={(
            <div className={classes.content}>
              {siteData.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  id={item.id}
                  src={item.attributes.posterImage.large}
                  alt={item.attributes.canonicalTitle}
                  title={item.attributes.canonicalTitle}
                  favorite={favorite}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                  showDetail={showDetail}
                />
              ))}
            </div>
            )}
        />
      </Routes>
      <Routes>
        <Route
          path="/detail"
          element={detail ? (
            <div className={classes.contentDetail}>
              <Detail
                title={detail.attributes.canonicalTitle}
                description={detail.attributes.description}
                src={detail.attributes.posterImage.large
                  ? detail.attributes.posterImage.large
                  : null}
                averageRating={detail.attributes.averageRating}
                ageRating={detail.attributes.ageRating}
                startDate={detail.attributes.startDate}
                endDate={detail.attributes.endDate}
                episodeCount={detail.attributes.episodeCount}
                status={detail.attributes.status}
                youtubeVideoId={detail.attributes.youtubeVideoId}
              />
            </div>
          ) : null}
        />
      </Routes>
    </div>
  )
}

export default App
