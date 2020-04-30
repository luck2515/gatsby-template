import React, { memo } from "react"
import { Link } from "gatsby"
import Layout from "../components/Style/Layout"
import { ThemeProvider } from "styled-components"
import Theme from "../components/Style/Theme"

const IndexPage = memo(() => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout pageTitle="Page2">
        <div>Page2</div>
        <Link to="/">Go to Home</Link>
      </Layout>
    </ThemeProvider>
  )
})

export default IndexPage
