import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const comedyList = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )
    const actionList = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )
    return (
      <div className="primevideo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />

        <h1>Action Movies</h1>

        <MoviesSlider movieList={actionList} />

        <h1>Comedy Movies</h1>
        <MoviesSlider movieList={comedyList} />
      </div>
    )
  }
}
export default PrimeVideo
