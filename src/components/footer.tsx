import React from "react"
import styled from "styled-components"

const Footer = () => (
  <MyFooter>© {new Date().getFullYear()} @luck2515_</MyFooter>
)

const MyFooter = styled.footer`
  text-align: center;
  margin-top: auto;
`

export default Footer
