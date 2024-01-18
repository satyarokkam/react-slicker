import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="slide-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
