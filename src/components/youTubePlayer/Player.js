import React from 'react'
import YouTube from 'react-youtube'
import classes from './plsyer.module.css'

const Player = ({ youtubeVideoId }) => (
  <div className={classes.player}>
    <YouTube videoId={youtubeVideoId} />
  </div>
)

export default Player
