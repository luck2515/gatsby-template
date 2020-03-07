import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Style/Layout"
import SEO from "../components/Organisms/Seo"

const SecondPage = () => (
  <Layout pageTitle="Page two">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
