import React, { memo } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import settings from "../Style/Settings"

const Header = memo(() => {
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
      <TitleLink to="/">
        <Title>{data.site.siteMetadata.siteTitle}</Title>
      </TitleLink>
    </MyHeader>
  )
})

const MyHeader = styled.header`
  line-height: ${settings.SIZE.HEADER_HEIGHT};
  background: white;
`
const TitleLink = styled(Link)`
  text-decoration: none;
`
const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.5em;
`

export default Header
