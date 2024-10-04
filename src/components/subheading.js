import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

const Subheading = ({
  title,
  isHome = false,
  backLink = "/",
  backLinkPageTitle = "",
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  var backLinkTitle = "Back"
  if (backLinkPageTitle !== "") {
    backLinkTitle = backLinkPageTitle
  }

  var pageTitle = "Coming Soon"
  if (site.siteMetadata?.title) {
    pageTitle = site.siteMetadata?.title
  }
  if (title && title !== "") {
    pageTitle = title
  }

  return (
    <div className="my-12">
      <h2 className="text-minion-yellow text-3xl font-bold">
        {!isHome && <div className="flex flex-col space-y-2">
          <span>{pageTitle}</span>
          <span className="text-xs">
            <Link
              // redirect to home if no back link is given
              to={backLink}
              className="text-vivid-blue hover:text-minion-yellow transition-all"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} /> {backLinkTitle}
            </Link>
          </span>
        </div>}
        {children}
      </h2>
    </div>
  )
}

Subheading.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  backLink: PropTypes.string,
  backLinkPage: PropTypes.string,
}

export default Subheading
