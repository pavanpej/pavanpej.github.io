import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            mail
          }
          siteUrl
        }
      }
    }
  `)

  return site.siteMetadata
}
