import React from 'react'
import { Link } from 'react-router-dom'
import { bool, func, string } from 'prop-types'
import classes from './header.module.css'

const Header = ({
  // eslint-disable-next-line react/prop-types
  valueSearch, setValueSearch, hiddenInput, inputVisible
}) => (
  <div className={classes.header}>
    <div className={classes.headerWrapper}>
      <a
        className={classes.headerTitleLink}
        href="/"
      >
        <h1 className={classes.headerTitle}>LOGO</h1>
      </a>
      {inputVisible
        ? (
          <div className={classes.headerInputWrapper}>
            <input
              className={classes.headerInput}
              type="text"
              value={valueSearch}
              onChange={((event) => setValueSearch(event.target.value))}
            />
          </div>
        )
        : null}
      <div className={classes.headerLinkWrapper}>
        <Link
          className={classes.headerLink}
          to="/"
          onClick={(e) => hiddenInput(e.target.text)}
        >
          Home
        </Link>
        <Link
          className={classes.headerLink}
          to="/favorite"
          onClick={(e) => hiddenInput(e.target.text)}
        >
          Favorite
        </Link>
      </div>
    </div>
  </div>
)
Header.prototype = {
  valueSearch: string,
  setValueSearch: func,
  hiddenInput: func,
  inputVisible: bool
}
export default Header
