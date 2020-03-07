import React from "react"
import styled from "styled-components"
import TitleLink from "../Atoms/TitleLink"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)

  return (
    <MyHeader>
      <Container>
        <TitleLink title={data.site.siteMetadata.siteTitle} />
      </Container>
    </MyHeader>
  )
}

const MyHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

export default Header
