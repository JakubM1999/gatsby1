import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const indexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
        date="8 March, 2022" 
        title="This is my first post" 
        excerpt="Here I write something about my first post on my new blog that I created" 
        slug="/test" />
      </Content>
    </Container>
  )
}

export default indexPage