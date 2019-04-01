import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { Form, FormGroup, InputGroup, FormControl, DropdownButton, MenuItem, Dropdown, Glyphicon, Button } from 'react-bootstrap'
import { StickyContainer, Sticky } from 'react-sticky'

class ShopspotLayout extends Component {

  render() {
    
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
        </Head>
        <header>
          <HeaderContainer>
            <Header>
              <LogoDiv>
                <Logo src="/static/image/ss_logo.png"/>
              </LogoDiv>
              <InputDiv>
                <Form>
                  <FormGroupStyled>
                    <InputGroup>
                    <DropdownButton
                        componentClass={InputGroup.Button}
                        id="input-dropdown-addon"
                        title="Action">
                        <MenuItem key="1">Item</MenuItem>
                      </DropdownButton>
                      <FormControl type="text" />
                      <InputGroup.Button>
                        <SearchButtonStyled> <SearchIcon/> </SearchButtonStyled>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroupStyled>
                </Form>
              </InputDiv>
              <CartDivStyled>
                <CartIconStyled/>
              </CartDivStyled>
              <CartDivStyled>
                <LinkStyled>
                  Register
                </LinkStyled>
              </CartDivStyled>
              <CartDivStyled>
                <LinkStyled href="https://www.w3schools.com">
                  Sign In
                </LinkStyled>
              </CartDivStyled>
            </Header>
          </HeaderContainer>

          

        </header>
        <StickyContainer>
          <Sticky>
          {
            ({style, isSticky}) => (
              <StickyNavWrapper isSticky={isSticky} style={ style }>
              <NavContainer>
                <TextNavStyle>
                  Women
                </TextNavStyle>
                <TextNavStyle>
                  Men
                </TextNavStyle>
                <TextNavStyle>
                  Lifestyle
                </TextNavStyle>
                <TextNavStyle>
                  Brands
                </TextNavStyle>
              </NavContainer>
              </StickyNavWrapper>
            )
          }
          </Sticky>

        <div>
        { this.props.children }
        </div>

        <footer>
          {'footer'}
        </footer>

        </StickyContainer>
      </div>
    )
  }
}

ShopspotLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default ShopspotLayout

const NavContainer = styled.div`
  width: 100%;
  // background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderContainer = styled.div`
  width: 100%;
  // background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const Header = styled.div`
  // background-color: blue;
  display: inline-block;
  vertical-align: middle;
  float: left;
`

const ShoppingBagIcon = styled.i.attrs({ className: 'fa fa-shopping-bag' })`
  color: #676a6c;
  font-size: 20px;
`

const NewPaperIcon = styled.i.attrs({ className: 'fa fa fa-newspaper-o' })`
  color: #676a6c;
  font-size: 20px;
`

const SearchIcon = styled.i.attrs({ className: 'fa fa-search' })`
  color: #676a6c;
`

const CartIconStyled = styled.i.attrs({ className: 'fa fa-shopping-cart' })`
  color: #676a6c;
  font-size: 20px;
  text-rendering: optimizeLegibility;
`

const SearchButtonStyled = styled(Button)`
  background-color: #E6E6E6;
  &:hover {
    background-color: #d3d3d3;
  }
`

const Logo = styled.img`
  width: 245px;
  @media only screen and (max-width: 768px) {
    width: 160px;
  }
`

const DropdownButtonStyled = styled(DropdownButton)`
  // background-color: red;
`
const LogoDiv = styled.div`
  margin: 0 0 0 30px;
  display: inline-block;
  vertical-align: middle;
`

const CartDivStyled = styled.div`
  margin: 0 0 0 30px;
  display: inline-block;
  vertical-align: middle;
`

const TextNavStyle = styled.div`
  font-size: 17px;
  margin: 0 0 0 30px;
  display: inline-block;
  vertical-align: middle;
  color: white;
`

const InputDiv = styled.div`
  width: 300px;
  margin: 0 20px 0 200px;
  display: inline-block;
  vertical-align: middle;
`

const FormGroupStyled = styled(FormGroup)`
  margin: 0;
`

const LinkStyled = styled.a`
  color: #666a6b;
  text-decoration:none;
  &:hover {
    // color: #666a6b;
    text-decoration:none;
 }
`

const StickyNavWrapper = styled.div`
  position: relative;
  background-color: #ff3434;
  transition: background-color .5s ease-out;
  background-color: ${props => props.isSticky ? '#ff3434' : 'none'};
  box-shadow: ${props => props.isSticky ? '0 0 3px #666666': 'none'};
  z-index: 99;
`

// ShopspotLayout.propTypes = {
//   children: PropTypes.node.isRequired,
//   title: 'Index'
// }

