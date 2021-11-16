import React from 'react'
import { Link } from 'react-router-dom'

import classes from './header.module.css'

const Header = ({
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
          <div>
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

export default Header
