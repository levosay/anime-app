import React from 'react'
import { string } from 'prop-types'
import classes from '../Card.module.css'
import CardBtn from '../../UI/button/CardBtn'

const CardFooter = ({ title }) => (
  <div className={classes.cardWrapper}>
    <h3 className={classes.card__title}>{title}</h3>
    <CardBtn>Add to favourites</CardBtn>
  </div>
)
CardFooter.propTypes = {
  title: string
}
export default CardFooter
