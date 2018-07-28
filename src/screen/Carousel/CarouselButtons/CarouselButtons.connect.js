import { connect } from 'react-redux'
import { fetchAnimals, resetAnimals } from 'modules/animals/actions'

import CarouselButtons from './CarouselButtons.js'

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: (type) => dispatch(fetchAnimals(type)),
    resetAnimals: () => dispatch(resetAnimals())
  }
}

export default connect(null, mapDispatchToProps)(CarouselButtons)
