import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLink = ({
  children,
  href,
  faIcon,
  className,
  size,
  isDownloadable,
}) => {
  const commonStyles = "hover:text-minion-yellow transition-all "
  return (
    <a
      href={href || ``}
      target="_blank"
      rel="noopener noreferrer"
      className={commonStyles + className}
      download={isDownloadable}
    >
      {children}&nbsp;
      {faIcon && <FontAwesomeIcon icon={faIcon} size={size || "lg"} />}
    </a>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  faIcon: PropTypes.instanceOf(Object),
  size: PropTypes.string,
  isDownloadable: PropTypes.bool,
}

SocialLink.defaultProps = {
  faIcon: null,
}

export default SocialLink
