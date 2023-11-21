import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Subheading from "../components/subheading"
import SocialLink from "../components/social-link"

import {
  // faPaperPlane, // this was not very clear that it's for email
  faExternalLinkAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  // faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            mail
          }
        }
      }
    }
  `)

  const { twitter, linkedin, github, mail } = site.siteMetadata?.social

  return (
    <Layout>
      <SEO title={`Pavan Rao`} />
      <Subheading>
        Hi, I'm Pavan Rao.{" "}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          👋
        </span>
      </Subheading>

      <section className="my-12" id="whoami" aria-label="whoami section">
        <h3 className="font-medium text-minion-yellow mb-2">whoami</h3>
        <p className="max-w-md">
          I am a full stack software developer currently working in the cloud
          and DevOps space. I am also an avid science fiction reader and
          enthusiast, and an occasional biker.
        </p>
      </section>

      <section className="my-12" id="tech" aria-label="tech section">
        <h3 className="font-medium text-minion-yellow mb-2">tech</h3>
        <p className="max-w-md">
          I currently work on Kubernetes development with Go and Docker, and
          have worked with JavaScript (Angular, React), Python, and Java in the
          past. My tech stack also includes experience with MySQL, MongoDB, and
          some novice level Linux shell scripting. I am a developer that strives
          for clean and maintainable code.
        </p>
      </section>

      <section
        className="my-12"
        id="entertainment"
        aria-label="entertainment section"
      >
        <h3 className="font-medium text-minion-yellow mb-2">entertainment</h3>
        <p className="max-w-md">
          Apart from technology (of all sorts), I enjoy spending time reading
          science fiction and mystery novels, or on YouTube browsing content in
          gaming, guitar, and science.
        </p>
      </section>

      <section className="my-12" id="social" aria-label="social section">
        <h3 className="font-medium text-minion-yellow mb-2">social</h3>
        <p className="max-w-xs">
          You can reach out to me at <br />
          <SocialLink
            href={`mailto:${mail}`}
            className="text-vivid-blue"
          >
            {mail}
          </SocialLink>{" "}
          or find me on <br />
          GitHub, Twitter, or LinkedIn
        </p>
        <div className="flex space-x-4 mt-8" aria-label="social links">
          <span aria-label="email">
            <SocialLink href={`mailto:${mail}`} faIcon={faEnvelope} />
          </span>
          <span aria-label="GitHub">
            <SocialLink
              href={`https://github.com/${github}`}
              faIcon={faGithub}
            />
          </span>
          <span aria-label="Twitter">
            <SocialLink
              href={`https://twitter.com/${twitter}`}
              faIcon={faTwitter}
            />
          </span>
          <span aria-label="LinkedIn">
            <SocialLink href={linkedin} faIcon={faLinkedin} />
          </span>
          {/* removing Medium until I have some posts
          <span aria-label="Medium">
            <SocialLink
              href={`https://medium.com/${medium}`}
              faIcon={faMediumM}
            />
          </span> */}
        </div>
      </section>

      <section className="my-12" id="resume" aria-label="resume section">
        <h3 className="font-medium text-minion-yellow mb-2">resume</h3>
        <p className="max-w-md">
          My resume can be found&nbsp;
          <span className="py-1 border-b-2 hover:text-minion-yellow hover:border-minion-yellow transition-all">
            <SocialLink
              href={`Pavan-Ramachandra-Rao-Resume.pdf`}
              faIcon={faExternalLinkAlt}
              size="sm"
              isDownloadable={false}
              // if this is `true` then clicking on it will download the file
            >
              here
            </SocialLink>
          </span>
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
