import React, { memo } from "react"
import { Link } from "gatsby"
import Layout from "../components/Style/Layout"
import { ThemeProvider } from "styled-components"
import Theme from "../components/Style/Theme"

const IndexPage = memo(() => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout pageTitle="Home">
        <div>Page1</div>
        <Link to="/page2">Go to Page2</Link>
      </Layout>
    </ThemeProvider>
  )
})

export default IndexPage
