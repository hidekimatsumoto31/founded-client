import { connect } from 'react-redux'

import Carousel from './Carousel.js'

const mapStateToProps = ({ animal }) => ({ ...animal })

export default connect(mapStateToProps)(Carousel)
