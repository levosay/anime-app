import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Card.module.css'
import CardFooter from './cardFooter/CardFooter'

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
      {
        hover
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
          : null
      }
      {/* <Detail */}
      {/*  item={item} */}
      {/* /> */}
      {/* <Routes> */}
      {/*  <Route */}
      {/*    path="/detail" */}
      {/*    element={( */}
      {/*      <div> */}
      {/*        <h3>33333</h3> */}
      {/*      </div> */}
      {/*    )} */}
      {/*  /> */}
      {/* </Routes> */}
    </div>
  )
}

export default Card
