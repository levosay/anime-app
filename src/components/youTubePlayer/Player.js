import React from 'react'
import YouTube from 'react-youtube'
import classes from './plsyer.module.css'

const Player = ({ youtubeVideoId }) => {
  console.log(youtubeVideoId)
  return (
    <div className={classes.palyer}>
      <YouTube videoId={youtubeVideoId} />
    </div>
  )
}

export default Player
