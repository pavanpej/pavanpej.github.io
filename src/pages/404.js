import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subheading from "../components/subheading"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Subheading title="404: Not found" />
    <p>
      Sorry, that page doesn't exist. <br />
      Might as well take a look at my{" "}
      <Link
        to="/"
        className="text-vivid-blue hover:text-minion-yellow transition-all"
      >
        homepage
      </Link>{" "}
      then!
    </p>
  </Layout>
)

export default NotFoundPage
