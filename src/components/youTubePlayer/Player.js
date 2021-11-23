import React from 'react'
import YouTube from 'react-youtube'
import { string } from 'prop-types'
import classes from './plsyer.module.css'

const Player = ({ youtubeVideoId }) => (
  <div className={classes.player}>
    <YouTube videoId={youtubeVideoId} />
  </div>
)
Player.prototype = {
  youtubeVideoId: string
}
export default Player
