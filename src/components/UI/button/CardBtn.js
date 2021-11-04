import React from 'react'
import { string } from 'prop-types'
import classes from './CardBnt.module.css'

const CardBtn = ({ children }) => (
  <a href="#" className={classes.btnCard}>{children}</a>
)
CardBtn.prototype = {
  children: string
}
export default CardBtn
