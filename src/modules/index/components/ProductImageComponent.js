import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class ProductImageComponent extends Component {

  render() {
    const {products} = this.props 
    return (
      <ImageContainerStyled>
        {/* ProductImage */}
        { products && products.length > 0 &&
        <ImageRowStyled>
          <h2> Trending Now</h2>
          <Line/>
          {products.map(product =>
            <ImageColStyled>
              <ImageWrapper>
                <ImageStyled src={product.url}/>
              </ImageWrapper>
            </ImageColStyled>
          )}
         </ImageRowStyled>
      }
      </ImageContainerStyled>
    )
  }
}

ProductImageComponent.propTypes = {
  products: PropTypes.object
}


export default ProductImageComponent


const ImageContainerStyled = styled.div.attrs({
  className: "container-fluid"
})`
  background: #F3F3F4;
`

const ImageRowStyled = styled.div.attrs({
  className: "row"
})`
  margin: 0 100px 0 100px;

`
const ImageColStyled = styled.div.attrs({
  className: "col-xs-6 col-sm-4 col-md-4 col-lg-3"
})`
  // background-color: red;
  height: 250px;
  padding-bottom: 15px;
  
`

const ImageWrapper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  border-radius:1%;
  overflow:hidden;
  cursor: pointer;
`

const ImageStyled = styled.image`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

const Line = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
  background-color: #ff8585;
  height: 3px;
`