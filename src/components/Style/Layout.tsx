import React from "react"
import styled from "styled-components"
import SEO from "../Organisms/Seo"
import settings from "./Settings"

import { GlobalCSS } from "./GlobalCSS"
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
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: calc(100vh - ${settings.SIZE.HEADER_HEIGHT});
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
`

export default Layout
