import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subheading from "../components/subheading"

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <Subheading title="Music" />
    <section className="my-12">
      <p
        className="max-w-md text-lg"
        id="road-trippin-intro"
        aria-label="road tripping page introduction"
      >
        Check out some of my all time favourite tunes to listen to (at any
        time!)
      </p>
    </section>

    <section className="my-12">
      <h3 className="font-medium text-minion-yellow mb-4">spotify</h3>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5ElOrYLirDLm1kuJc1TLgu?utm_source=generator&theme=0"
        width="100%"
        height="500"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-mediaF; fullscreen; picture-in-picture"
        loading="eager"
        title="spotify"
        className="max-w-2xl"
      ></iframe>
    </section>

    <section className="my-12">
      <h3 className="font-medium text-minion-yellow mb-2">guitar</h3>
      <p className="font-light max-w-md text-xs mb-4">* this list is in no particular order</p>
      <ul className="leading-8 hover:list-decimal hover:list-outside">
        <li>Comfortably Numb by Pink Floyd</li>
        <li>Stairway to Heaven by Led Zeppelin</li>
        <li>Hotel California by Eagles</li>
        <li>Wish You Were Here by Pink Floyd</li>
        <li>Big Love by Lindsey Buckingham</li>
        <li>Purple Haze by Jimi Hendrix</li>
      </ul>
    </section>
  </Layout>
)

export default MusicPage
