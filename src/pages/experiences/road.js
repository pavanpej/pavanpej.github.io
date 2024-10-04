import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Subheading from "../../components/subheading"

const assetUrlPrefix = "/assets/experiences"

const RoadPage = () => {
  const data = [
    {
      id: "wagoneer",
      title: "Wagoneer Series II (2024, 8-seat)",
      dateDriven: "Sep 28, 2024",
      location: "Cape Cod, MA",
      description:
        "I drove the Wagoneer on a 1-day trip to Cape Cod, MA from Boston with 8 of my closest buddies. Buttery smooth steering, and suspension like I was on the clouds. A particularly memorable memory from this one - 3 days before the trip, the rental company calls and tells us they don't have an 8-seater in their inventory (AAARGHHH!!!) and that they'd most likely be giving us 2 smaller (a.k.a. meh) cars, but on the morning of the trip, they surprise us with one of the best 8-seaters available. However, Jeep needs to work a lot more on the adaptive cruise control system (specifically the lane assist) for the price they charge. Recommended only for folks who don't mind feeling disconnected from the tarmac.",
      image: "2024-09-27-wagoneer-cape-cod.jpg",
      attribution:
        "Picture by Amulya Rajaguru, permission given to author for use",
    },
    {
      id: "rubicon",
      title: "Jeep Wrangler Rubicon (V6)",
      dateDriven: "Sep 5, 2024",
      location: "Chicago, IL",
      description:
        "Drove the Wrangler on the 2nd day of my 4-day Chicago trip at the start of September 2024. Turning off the TCS and flooring the gas on a dead-end gravel road near one of the state parks was one of the highlights of my experiences in the US, which is why I will fondly remember this red-colored pocket-sized beast. Also had the well-timed fortunate experience of driving in the open-top configuration at 2am on a chilly 14°C night, driving through downtown Chicago with the boys. Highly recommend for off-roading, but not great for large groups or if you hate feeling like you're driving on top of a mountain.",
      image: "2024-09-05-jeep-wrangler-rubicon-chicago.jpg",
    },
    {
      id: "explorer",
      title: "Ford Explorer XLT",
      dateDriven: "Aug 16-19, 2024",
      location: "Seattle, WA",
      description:
        "A pretty average full-size SUV for most people, but the fondness I have associated with this car has to do with 2 events. First, the fact that for our 4-day trip in Seattle, on a pleasant sunny Seattle afternoon, this was the upgrade that Enterprise gifted us with, after checking their inventory (for a frustrating 25 minutes) and telling us that the sedan we had booked was unavailable. The second point in favour was due to this being the car where my closest friends reunited after a (long, long) span of almost 2 years.",
      image: "2024-08-17-explorer-seattle.jpg",
    },
    {
      id: "van",
      title: "Chevy Express Van (12-seat)",
      dateDriven: "Apr 6-7, 2024",
      location: "Niagara, NY",
      description:
        "My first time doing a long-a** 2-day road trip from Boston since I landed in the US (drove this behemoth for almost 1000 miles) with my newly-minted friend group, and I got to drive this 12-seat van with steering alignment issues, a non-existent sound system, and (the icing on the cake -) a duct-tape covered rear window (it sounded like a wind-tunnel in there). Suffice to say, memories were made, fun was had. Need I say more?",
      image: "2024-04-06-chevy-express-niagara.jpg",
    },
  ]

  return (
    <Layout>
      <SEO title="Road Trippin'" />
      <Subheading
        title="Road Trippin'"
        backLink="/experiences"
        backLinkPageTitle="Experiences"
      />

      <section
        className="my-12"
        id="road-trippin-intro"
        aria-label="road tripping page introduction"
      >
        <p className="max-w-md text-lg text-justify">
          I started my journey of exploring various places in the USA in 2023
          (when I landed in Boston for my Master's), and in the process, have
          driven vehicles of different classes, sizes, makes, models, and price
          ranges. Below is a list of a select few that I have enjoyed driving
          till now (some because of the vehicle itself, but definitely because
          of the people and memories).
        </p>
      </section>

      {data.map((item, index) => {
        return (
          <section
            className="my-14"
            id={item.id}
            aria-label={`${item.id} section`}
            key={index}
          >
            <h3 className="font-medium mb-2">
              <p className="text-minion-yellow mb-1 text-xl">{item.title}</p>
              <p className="text-xs font-bold text-subtext-gray tracking-wide flex space-x-1 mw-w-md">
                <span>{item.dateDriven}</span>
                <span>&#9679;</span>
                <span>{item.location}</span>
              </p>
            </h3>
            <p className="max-w-md text-justify">{item.description}</p>
            <img
              className="mt-4 w-96"
              src={`${assetUrlPrefix}/${item.image}`}
              alt={item.title}
            />
            {item.attribution && (
              <p className="text-xs mt-1 text-subtext-gray">
                {item.attribution}
              </p>
            )}
          </section>
        )
      })}
    </Layout>
  )
}

export default RoadPage
