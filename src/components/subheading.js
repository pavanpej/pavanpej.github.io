import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Subheading = ({ children }) => {
  const { site } = useStaticQuery(
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
    <div className="my-12">
      <h2 className="text-minion-yellow text-3xl font-bold">
        {children || site.siteMetadata?.title}
      </h2>
    </div>
  )
}

Subheading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Subheading
