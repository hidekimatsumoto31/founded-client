import { connect } from 'react-redux'

import Carousel from './Carousel.js'

const mapStateToProps = ({ animal }) => ({ images: animal.animals })

export default connect(mapStateToProps)(Carousel)
