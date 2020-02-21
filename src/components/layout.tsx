import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalCSS } from "./globa-css"
import { ResetCSS } from "./reset-css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 960px;
`

export default Layout
