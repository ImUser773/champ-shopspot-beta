import React, { Component } from 'react'
import ShopspotLayout from '../component/ShopspotLayout'
import styled from 'styled-components'
import Slides from 'react-slick'
import { Carousel, Glyphicon } from 'react-bootstrap'
import { withReduxSaga } from '../store'
import ProductContainer from '../modules/index/containers/ProductContainer'
import { actionTypes, fetch} from '../modules/index/actions/product-action'


class Index extends Component {

  static async getInitialProps ({store}) {
    //console.log('work1')
    store.dispatch(fetch())
  }

  render() {
    return (
      <ShopspotLayout title="shopspot">

        <CarouselStyled prevIcon={<div> </div>} nextIcon={<div> </div>} slide={true} interval={10000}>
          <Carousel.Item>
            <ImageStyled src="https://shopspot.s3.amazonaws.com/2018/01/feature/58aa6bfc42cef4fb37c55bdc/0dbbfff9-f352-4494-8b26-e05bf0deb861" />
          </Carousel.Item>
          <Carousel.Item>
            <ImageStyled src="https://shopspot.s3.amazonaws.com/2018/01/feature/58aa6bfc42cef4fb37c55bdc/4595f00e-66a4-4fec-aa2c-6fd4cd94411f" />
          </Carousel.Item>
          <Carousel.Item>
            <ImageStyled src="https://shopspot.s3.amazonaws.com/2018/01/feature/58aa6bfc42cef4fb37c55bdc/90ed35af-9e21-4200-838c-63f1610e720b" />
          </Carousel.Item>
        </CarouselStyled>

        <ProductContainer/>

      </ShopspotLayout>
    )
  }
}

export default withReduxSaga(Index)

const ImageStyled = styled.image`
  width: 100%;
`

const CarouselContainerStyled = styled.div`
  width: 100%;
  // background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const MockDiv = styled.div`
  width: 100%;
  height: 1000px;
  background: #F3F3F4;
`

const CarouselDivStyled = styled.div`
  // background-color: blue;
  display: inline-block;
  vertical-align: middle;
  float: left;
`

const CarouselStyled = styled(Carousel)`
`
