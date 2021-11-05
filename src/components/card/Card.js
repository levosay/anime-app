import React, { useState } from 'react'
import {
  arrayOf, bool, number, shape, string
} from 'prop-types'
import classes from './Card.module.css'
import CardFooter from './cardFooter/CardFooter'

const Card = ({ item }) => {
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover((prevState) => !prevState);
  }

  // console.log(item)
  // console.log(hover)
  return (
    <div
      className={classes.card}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img
        className={hover ? classes.card__img_active : classes.card__img}
        src={item.attributes.posterImage.large}
        alt={item.attributes.canonicalTitle}
      />
      {
        hover
          ? <CardFooter title={item.attributes.canonicalTitle} />
          : null
      }
      {/* <Detail */}
      {/*  item={item} */}
      {/* /> */}
    </div>
  )
}

Card.propTypes = {
  item: shape({
    attributes: shape({
      abbreviatedTitles: arrayOf(string),
      ageRating: string,
      ageRatingGuide: string,
      averageRating: string,
      canonicalTitle: string,
      coverImage: shape({
        large: string,
        original: string,
        small: string,
        tiny: string
      }),
      coverImageTopOffset: number,
      createdAt: string,
      description: string,
      endDate: string,
      episodeCount: number,
      episodeLength: number,
      favoritesCount: number,
      nsfw: bool,
      popularityRank: number,
      posterImage: shape({
        large: string,
        original: string,
        small: string,
        tiny: string
      }),
      ratingRank: number,
      showType: string,
      slug: string,
      startDate: string,
      status: string,
      subtype: string,
      synopsis: string,
      titles: shape({
        en: string,
        en_jp: string,
        ja_jp: string
      }),
      totalLength: number,
      updatedAt: string,
      userCount: number,
      youtubeVideoId: string
    }),
    id: string,
    links: shape({
      self: string
    }),
    type: string
  })
}
export default Card
