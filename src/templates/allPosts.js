import React from "react"
import { graphql } from "gatsby"
import { Container, Content, ContentCard, FeatureImage, Pagination } from "../components"
import { H1, P } from "../elements"

const allPosts = ({pageContext, data}) => {
    const { currentPage, numPage } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPage
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`


    const posts = data.allMdx.edges

    return (
        <Container>
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    Hello 
                </H1>
                <P color="dark2" textAlign="center">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                </P>
                {posts.map(post =>(
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
              node {
                frontmatter {
                  slug
                  title
                  date
                  excerpt
                }
              }
            }
          }
    }
`