import React from 'react'
import { func, shape, string } from 'prop-types'
import Card from '../card/Card'

const Favorite = ({ favorite, removeFavorite, showDetail }) => (favorite.map((item) => (
  <Card
    key={item.id}
    favorite={favorite}
    id={item.id}
    src={item.src}
    alt={item.alt}
    title={item.title}
    removeFavorite={removeFavorite}
    showDetail={showDetail}
  />
)))

Favorite.prototype = {
  favorite: shape({
    alt: string,
    id: string,
    src: string,
    title: string
  }),
  removeFavorite: func,
  showDetail: func
}

export default Favorite
