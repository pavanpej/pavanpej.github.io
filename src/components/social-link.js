import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLink = ({ children, href, faIcon, className }) => {
  return (
    <a
      href={href || ``}
      target="_blank"
      rel="noopener noreferrer"
      className={className || "hover:text-minion-yellow transition-all"}
    >
      {faIcon && <FontAwesomeIcon icon={faIcon} size="lg" />}
      {children}
    </a>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  faIcon: PropTypes.instanceOf(Object),
}

SocialLink.defaultProps = {
  faIcon: null,
}

export default SocialLink
