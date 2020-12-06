import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="my-12">
      <h2 className="text-minion-yellow text-3xl font-bold">
        Hi, I'm Pavan Rao. <span role="img" aria-label="jsx-a11y/accessible-emoji">👋</span>
      </h2>
    </div>

    <section className="my-12" id="whoami" aria-label="whoami section">
      <h3 className="font-medium text-minion-yellow mb-2">whoami</h3>
      <p className="max-w-md">
        I am a full stack software developer currently working in the cloud and
        DevOps space. I am also an avid science fiction reader and enthusiast,
        and an occasional biker.
      </p>
    </section>

    <section className="my-12" id="tech" aria-label="tech section">
      <h3 className="font-medium text-minion-yellow mb-2">tech</h3>
      <p className="max-w-md">
        I currently work on Kubernetes development with Go and Docker, and have
        worked with JavaScript (Angular, React), Python, and Java in the past.
        My tech stack also includes experience with MySQL, MongoDB, and some
        novice level Linux shell scripting. I am a developer that strives for
        clean and maintainable code.
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
        pavanpej@gmail.com or find me on <br />
        GitHub, Twitter, or LinkedIn
      </p>
      <div className="flex space-x-4 mt-12" aria-label="social links">
        <span aria-label="mail">mail</span>
        <span aria-label="GitHub">github</span>
        <span aria-label="Twitter">twitter</span>
        <span aria-label="LinkedIn">linkedin</span>
        <span aria-label="Medium">medium</span>
      </div>
    </section>
  </Layout>
)

export default IndexPage
