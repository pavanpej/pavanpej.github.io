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
      id: "fall",
      title: "Toyota Highlander (AWD, 8-seat) + Chevrolet Traverse (2024 AWD, 7-seat)",
      dateDriven: "Oct 12-14, 2024",
      location: "NH, VT, ME",
      description:
        "We booked two 7-seaters for our trip to see the fall colors as we had to lug around 14 people across the New England landscape to see the beautiful shades of red, orange, and yellow for the Fall 2024 season. The promised cars were either the GMC Acadia or something similar. What ended up happening on the morning of Oct 12 was that Sixt had only one 7-seater available in their inventory. They gave the one Toyota Highlander they had (under my name) and they upgraded my friend to the colossal 8-seater Ford Expedition. We were already overjoyed at this point thinking of all the 'fun' we'd have driving the powerful large SUV. The moment to pick up the cars arrived, I spotted my car, and was mildly offended at the miniscule trunk space and unassuming presence of the Toyota Highlander. However, I swallowed my disdain and hoped for a good ride at least (more to come on this). Meanwhile, my friend goes up to the guy in the rental booth (I'm just gonna call him 'Dude' from now on) and asks for his car, but to no avail. Instead, he gets told that the keys to the Expedition have gone MISSING (huh? moment #1). Just for our 'trouble' (and no doubt, in the hopes of providing 'great customer service'), Dude goes ahead and gives us a $50 discount! (huh? moment #2). By now my friend #3 had started to pray to his gods that we'd get a decent car (WITH available keys), and as if the heavens acknowledged, Dude pulls out a 'just because we don't have the keys to the Expedition, I'm gonna upgrade you to a BMW X7' (huh? moment #3). Now, the agnostic in me also has started to convert, in the hopes that this isn't too good to be true, when Dude (yet again) drops another nuke - the X7's keys have also mysteriously disappeared (huh? moment #4). Our disappointment knew no bounds, but then he calms us down by telling us that a Chevy Traverse is on its way, fresh from the car wash. We didn't know what this car looks like, but once it arrived, we were happy that this at least had decent trunk space, and upon closer inspection, seemed to have a powerful motor as well. Over the next 3 days, we came to realise the pros and cons of both cars, and I came to realise that the Highlander is actually a decently fun and engaging car to drive, with (what I thought was) a much better adaptive cruise control system (at least compared to the Traverse), and better throttle and transmission response. The Traverse seemed to have a more powerful engine (couldn't verify), and better creature comforts (heated seats and steering wheel, missing from the Highlander), but I felt like the Highlander grew on me (and now I'll look fondly upon any Highlander on the streets). We had amazing fun chucking both of them around the curves and through the straights (and sometimes even racing each other) in Maine, Vermont, and New Hampshire, day or night, through rain, fog, mist, or sunlight. These 2 cars took all the thrashing in stride, and have cemented themselves as part of our core memories. Exciting drives, lively adventures, alluring landscapes, and unforgettable memories - these are some phrases I'd use to describe this 3-day journey.",
      image: "2024-10-12-nh-vt-me-toyota-highlander-chevy-traverse.jpg",
    },
    {
      id: "tacoma",
      title: "Toyota Tacoma (4x4)",
      dateDriven: "Oct 5, 2024",
      location: "Rockport, MA",
      description:
        "In the first week of October 2024, an aurora borealis (due to a recent sunstorm) was predicted to make landfall in northern Mass. that weekend. I was made aware of this fact mere hours before the supposed light show was going to be visible near Boston, so we made a last minute plan to hire a Zipcar and go hunt for it in Rockport. For just $1.75/h more than your standard 5-seater, we got to hire a Toyota Tacoma for our trip. Initially, I felt like we got a faulty vehicle owing to the fact that every thrust of the pedal was making the truck jump. It took me a whole 10 minutes to realise that the previous customer had left it in the 4-wheel drive mode. Once we shifted to 2WD, the ride was smooth enough for our short stargazing journey. The cruise control switches are inconvenienty located compared to similar vehicles, but it serves its purpose decently. Although the aurora turned out to be a false alarm, I enjoyed driving this gas guzzler on the Massachusetts state highways at night. I only wish I'd had a chance let this beat rip through sand dunes (...maybe some day.)",
      image: "2024-10-05-rockport-toyota-tacoma.jpg",
    },
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
              <p className="text-minion-yellow mb-1 text-xl max-w-lg">{item.title}</p>
              <p className="text-xs font-bold text-subtext-gray tracking-wide flex space-x-1 mw-w-lg">
                <span>{item.dateDriven}</span>
                <span>&#9679;</span>
                <span>{item.location}</span>
              </p>
            </h3>
            <p className="max-w-lg text-justify">{item.description}</p>
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
