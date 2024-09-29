import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRightLong,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Subheading from "../../components/subheading"

const ExperiencesPage = () => (
  <Layout>
    <SEO title="Experiences" />
    <Subheading>
      <div className="flex flex-col space-y-2">
        <span>Experiences</span>
        <span className="text-xs">
          <Link
            to="/"
            className="text-vivid-blue hover:text-minion-yellow transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </Link>
        </span>
      </div>
    </Subheading>

    <p className="mb-2">Check out some of my experiences below</p>

    <section id="links">
      <Link
        to="/experiences/road"
        className="text-vivid-blue hover:text-minion-yellow transition-all"
      >
        Road Trippin' <FontAwesomeIcon icon={faArrowRightLong} />
      </Link>
    </section>
  </Layout>
)

export default ExperiencesPage
