import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../Organisms/Seo"

import { GlobalCSS } from "./GlobaCSS"
import { ResetCSS } from "./ResetCSS"
import Header from "../Organisms/Header"
import Footer from "../Organisms/Footer"

interface Props {
  pageTitle: string
}
const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <SEO pageTitle={pageTitle} />
      <Header />
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
