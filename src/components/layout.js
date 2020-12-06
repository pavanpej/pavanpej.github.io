/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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
      <div className="bg-rich-black text-white font-sans min-h-screen h-full min-w-full pb-24">
        {/* highlight bar */}
        <div className="bg-minion-yellow h-2.5 mb-24" id="highlight-bar"></div>
        {/* get some good horizontal margins */}
        <div class="mx-6 sm:mx-12 md:mx-48 lg:ml-96">
          <Header siteTitle={site.siteMetadata?.title || `Pavan Rao`} />
          <main>{children}</main>
          <footer class="mt-72">
            <div class="bg-minion-yellow w-8 h-1 mb-8"></div>
            <p class="text-copyright-gray font-bold">
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
