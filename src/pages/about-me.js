import React, { Component } from 'react'
import styled from 'styled-components'


class AboutMe extends Component {

  render() {

    return (
      <AboutMeContainer>
        <AboutMeLayout>
          <AboutMeCol>
            About me
          </AboutMeCol>
          <AboutMeCol>
            About me
          </AboutMeCol>
        </AboutMeLayout>
      </AboutMeContainer>
    )
  }
}

const AboutMeContainer = styled.div.attrs({
  className: "container-fluid"
})``

const AboutMeLayout = styled.div.attrs({
  className: "row"
})`

`
const AboutMeCol = styled.div.attrs({
  className: "col-xs-2 col-sm-4 col-md-6 col-lg-12"
})`
  background-color: red;
`



export default AboutMe