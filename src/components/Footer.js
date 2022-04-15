import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }

      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }

      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }

      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={data.facebook.publicURL} alt="Facebook logo"/>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={data.github.publicURL} alt="Github logo"/>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={data.twitter.publicURL} alt="Twitter logo"/>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={data.youtube.publicURL} alt="Youtube logo"/>
            </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          © 2022 Jacobs games. All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
