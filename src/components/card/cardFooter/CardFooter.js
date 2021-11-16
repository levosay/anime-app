import React from 'react'
import { string, func } from 'prop-types'
import classes from '../Card.module.css'
import CardBtn from '../../UI/button/CardBtn'

const CardFooter = ({
  addFavorite, removeFavorite, id, favorite = [], ...props
}) => (
  <div className={classes.cardWrapper}>
    <h3 className={classes.card__title}>{props.title}</h3>
    <CardBtn
      id={id}
      onClick={favorite.find((item) => item.id === id)
      || JSON.parse(localStorage.getItem('favorite')).find((item) => item.id === id)
        ? removeFavorite
        : addFavorite}
      {...props}
    >
      {favorite.find((item) => item.id === id)
      || JSON.parse(localStorage.getItem('favorite')).find((item) => item.id === id)
        ? 'Remove'
        + ' to'
        + ' favourites' : 'Add to favourites'}
    </CardBtn>
  </div>
)
CardFooter.propTypes = {
  title: string,
  addFavorite: func,
  id: string
}
export default CardFooter
