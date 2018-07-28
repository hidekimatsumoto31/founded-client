import { connect } from 'react-redux'
import { fetchAnimals, resetAnimals } from 'modules/animals/actions'

import AnimalFilterButtons from './AnimalFilterButtons.js'

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: (type) => dispatch(fetchAnimals(type)),
    resetAnimals: () => dispatch(resetAnimals())
  }
}

export default connect(null, mapDispatchToProps)(AnimalFilterButtons)
