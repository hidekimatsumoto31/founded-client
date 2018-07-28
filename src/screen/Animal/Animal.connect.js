import { connect } from 'react-redux'

import Animal from './Animal.screen.js'

const mapStateToProps = ({ animal }) => ({ ...animal })

export default connect(mapStateToProps)(Animal)
