import React from 'react'
import {
  func, shape, string
} from 'prop-types'
import classes from './CardBnt.module.css'

const CardBtn = ({
  children, onClick, id, ...props
}) => (
  <button
    className={classes.btnCard}
    onClick={(e) => onClick(e, id, props.imgSrc, props.imgAlt, props.title)}
  >
    {children}
  </button>
)
CardBtn.prototype = {
  children: string,
  onClick: func,
  id: string,
  props: shape({
    imgSrc: string,
    imgAlt: string,
    title: string
  })
}
export default CardBtn
