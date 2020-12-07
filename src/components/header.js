import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            brand
          }
        }
      }
    `
  )

  return (
    <header>
      <div className="mb-6" id="brand">
        <h1
          className="font-brand text-minion-yellow text-6xl"
          aria-label="website brand"
        >
          <Link to="/">{site.siteMetadata?.brand}</Link>
          {/* <Link to="/">{siteTitle}</Link> */}
        </h1>
      </div>

      <nav>
        {/*
        forthcoming links
        - whoami
        - blog
        - recommentations 
      */}
      </nav>

      <div className="my-12" id="separator">
        <span className="text-minion-yellow text-3xl">. . .</span>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
