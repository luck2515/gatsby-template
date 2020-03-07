import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {
  title: string
  className?: string
}
const TitleLink: React.FC<Props> = ({ to, title, className }) => {
  return (
    <Title>
      <LinkExtend to="/" className={className}>
        {title}
      </LinkExtend>
    </Title>
  )
}

const Title = styled.h1`
  margin: 0;
`
const LinkExtend = styled(Link)`
  color: white;
  text-decoration: none;
`
export default TitleLink
