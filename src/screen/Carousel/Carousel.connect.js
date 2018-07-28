import { connect } from 'react-redux'

import Carousel from './Carousel.screen.js'

const mapStateToProps = ({ animal }) => ({ ...animal })

export default connect(mapStateToProps)(Carousel)
