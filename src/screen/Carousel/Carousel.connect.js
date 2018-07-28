import { connect } from 'react-redux'
import { fetchAnimals } from 'modules/animals/actions'

import Carousel from './Carousel.screen.js'

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: (type) => dispatch(fetchAnimals(type))
  }
}

const mapStateToProps = ({ animal }) => ({ ...animal })

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
