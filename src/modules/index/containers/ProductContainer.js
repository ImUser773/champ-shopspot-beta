import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { actionTypes, fetch } from '../actions/product-action'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import productSelector  from '../selectors/product-selector'
import ProductImageComponent from '../components/ProductImageComponent'


class ProductContainer extends Component {

  componentDidMount() {

  }

  handle = (e, test) => {
    this.props.fetchAPI()
  }

  render () {
    // console.log(this.props.product.product)
    
    const { results } = this.props.product.product
    
    return (

      <div>
        {/* <button onClick={ (e)=> this.handle(e, 'test') } > Fetch API </button> */}
        <ProductImageComponent products={results}/>
      </div>)
  }
}

ProductContainer.propTypes = {
  product: PropTypes.object,
  fetchAPI: PropTypes.func
}

const mapStateToProps = (state, props) => {
  return {
      product: state.index.product
  }
}

// const mapStateToProps = (state, props) => createStructuredSelector({
//   product: productSelector
// })(state, props)


const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchAPI: fetch
}, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ProductContainer)
