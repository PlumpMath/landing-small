
import React from "react"

export default class EyeoVid extends React.Component {
  render () {
    return (
      <div
        style={{
          marginTop: 40,
          border:"none",
          maxWidth: 740,
          // padding: 20
        }}>
        <iframe
          style={{
            border:"none",
          }}
          width="740"
          height="420"
          src="https://player.vimeo.com/video/69323991?color=eeeeee&badge=0&title=lala" 
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen/>
      </div>
    )
  }
}



/*
        width="740"
        height="360"
*/