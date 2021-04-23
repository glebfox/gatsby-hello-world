import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "700px",
        padding: `${rhythm(2)}`,
        paddingTop: `${rhythm(1.5)}`,
      }}
    >
      <Link to={`/`}>
        <h3
          css={{
            marginBottom: `${rhythm(2)}`,
            display: "inline-block",
            fontStyle: "normal",
          }}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={{
          float: "right",
        }}
      >
        About
      </Link>
      {children}
    </div>
  )
}
