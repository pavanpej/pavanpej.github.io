import React, { useEffect } from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

const Resume = () => {
  const { siteUrl } = useSiteMetadata()
  const resumePath = siteUrl + "/Pavan-Ramachandra-Rao-Resume.pdf"

  useEffect(() => {
    window.location.replace(resumePath)
  })

  return <></>
}

export default Resume
