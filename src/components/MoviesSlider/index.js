import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const MovieSlider = props => {
  const {movieList} = props
  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieList.map(eachItem => (
          <MovieItem key={eachItem.id} movieDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
