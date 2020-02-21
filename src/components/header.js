import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <MyHeader>
    <Container >
      <Title>
        <TitleLink to="/" >
          {siteTitle}
        </TitleLink>
      </Title>
    </Container>
  </MyHeader>
)

const MyHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const Title = styled.h1`
  margin: 0;
`
const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export default Header
