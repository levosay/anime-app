import React from 'react'
import classes from './detail.module.css'
import Player from '../youTubePlayer/Player'

const Detail = ({
  title, src, averageRating, ageRating, description, startDate, endDate, episodeCount, status, youtubeVideoId
}) => {
  const rating = (value) => {
    const roundedValue = `${Math.floor(value)}%`
    return (
      <div className={classes.progressWrapper}>
        <div
          className={classes.progress}
          style={{ width: `${roundedValue}` }}
        >
          {roundedValue}
        </div>
      </div>
    )
  }
  return (
    <div className={classes.detail}>
      <div className={classes.detailInfo}>
        <div className={classes.detailImgWrapper}>
          <span className={classes.detailRating}>{ageRating}</span>
          <span className={classes.detailStatus}>{status}</span>
          <img
            className={classes.detailImg}
            src={src}
            alt={title}
          />
          {rating(averageRating)}
        </div>
        <div className={classes.detailDate}>
          <span className={classes.detailDateTitle}>series release</span>
          <span className={classes.detailDateText}>
          {startDate}
            {' '}
            -
            {' '}
            {endDate}
          </span>
          <span className={classes.detailDateTitle}>Number of episodes</span>
          <span className={classes.detailDateText}>{episodeCount}</span>
        </div>
      </div>
      <div className={classes.detailDescription}>
        <h1 className={classes.detailDescriptionTitle}>{title}</h1>
        <p className={classes.detailDescriptionText}>{description}</p>
        {youtubeVideoId
          ? (
            <Player
              youtubeVideoId={youtubeVideoId}
            />
          )
          : null}
      </div>
    </div>
  )
}

export default Detail
