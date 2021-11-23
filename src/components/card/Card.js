import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  arrayOf, func, shape, string
} from 'prop-types'
import classes from './Card.module.css'
import CardFooter from './cardFooter/CardFooter'
import { cardProps } from '../../customPrpops/cardProps'

const Card = ({
  addFavorite, removeFavorite, favorite, showDetail, ...props
}) => {
  const [hover, setHover] = useState(false)

  const toggleHover = (event) => {
    if (event === 'onMouseEnter') setHover(true)
    if (event === 'onMouseLeave') setHover(false)
  }
  return (
    <div
      id="card"
      className={classes.card}
      onMouseEnter={(event) => toggleHover(event._reactName)}
      onMouseLeave={(event) => toggleHover(event._reactName)}
    >
      <Link
        to="/detail"
        className={classes.card__img__wrapper}
        onClick={() => showDetail(props.id)}
      >
        <img
          className={hover ? classes.card__img_active : classes.card__img}
          src={props.src}
          alt={props.alt}
        />
      </Link>
      {hover
        ? (
          <CardFooter
            id={props.id}
            title={props.title}
            imgSrc={props.src}
            imgAlt={props.alt}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            favorite={favorite}
          />
        )
        : null}
    </div>
  )
}

Card.prototype = {
  addFavorite: func,
  removeFavorite: func,
  favorite: shape({
    alt: string,
    id: string,
    src: string,
    title: string
  }),
  showDetail: func,
  props: shape({
    id: string,
    title: string,
    src: string,
    alt: string,
    item: arrayOf(cardProps)
  })
}

export default Card
