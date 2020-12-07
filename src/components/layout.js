import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="bg-rich-black bg-pattern-topography text-white font-sans min-h-screen h-full min-w-full pb-32">
        {/* highlight bar */}
        <div className="bg-minion-yellow h-2.5 mb-24" id="highlight-bar"></div>
        {/* get some good horizontal margins */}
        <div className="mx-6 sm:mx-12 md:mx-48 lg:ml-96">
          <Header siteTitle={site.siteMetadata?.title || `Pavan Rao`} />
          <main>{children}</main>
          <footer className="mt-36">
            <div className="bg-minion-yellow w-8 h-1 mb-8"></div>
            <p className="text-copyright-gray font-medium">
              &copy; Copyright {new Date().getFullYear()}, Pavan Ramachandra Rao
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
