import React from 'react'
import Card from '../card/Card'

const Favorite = ({ favorite, removeFavorite, showDetail, toggleHover }) => (favorite.map((item) => (
  <Card
    key={item.id}
    favorite={favorite}
    id={item.id}
    src={item.src}
    alt={item.alt}
    title={item.title}
    removeFavorite={removeFavorite}
    showDetail={showDetail}
    toggleHover={toggleHover}
  />
)))

export default Favorite
