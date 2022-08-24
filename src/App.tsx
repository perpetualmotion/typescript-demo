import "./App.css";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import river from "./Assets/river.jpg";
import train from "./Assets/train.jpg";
import ral from "./Assets/ral.jpg";
import hana from "./Assets/hana.jpg";
import kohei from "./Assets/kohei.jpg";
import denwa from "./Assets/denwa.jpg";

function App() {
  interface Desc {
    desc: String;
  }

  interface Location {
    location: String | Number;
  }

  interface LocationDesc extends Location, Desc {}

  const River: LocationDesc = {
    location: 17,
    desc: "This is an image I took during my time in Tokyo in 2019. It was taken after I just finished working on a large production for a major brand. I had a lot of fun shooting that day so this shot after work is always memorable to me. Somewhere in western Tokyo..",
  };

  const Train: LocationDesc = {
    location: "Somewhere on the Yamanote Line, Tokyo",
    desc: "This is an image I took on the train in Tokyo. It was taken on the Yamanote Line - one of the most popular train lines in Tokyo. It runs in a huge circle around Tokyo's most popular train stops and acts as lifeline for people to transfer to other lines. I don't think I was expecting this kid to rush out of the train when I was taking this photo but it works!",
  };

  const Ral: LocationDesc = {
    location: "Shibuya Game Center, Tokyo",
    desc: "This is an image I took in a game center in Tokyo. I was shooting a lookbook for a brand and thought it would be a fun location. Game centers in Japan are a sensory overload, there are plenty of different kinds of games to play. I had just beaten my friend Ral, the model at Mario Kart just after taking this photo.",
  };

  const Denwa: LocationDesc = {
    location: "Mishima station, Shizouka",
    desc: "I took this photo on a trip to visit my host family in the countryside. There are so many nostagalic places and things in Japan, but this stood out to me after I arrived at their local station - several hours away from Tokyo, by the base of Mt. Fuji.",
  };

  const Hana: LocationDesc = {
    location: "Shibuya Underpass, Tokyo",
    desc: " I took this photo with some friends in Shibuya under an overpass. My friend owns a flower shop and after a long day of shooting we decieded to have some fun and burn these to get some cool images. Needless to say we got plenty of weird looks.",
  };

  const Kohei: LocationDesc = {
    location: "Toyosu Bridge, Tokyo",
    desc: " This was from that earlier shoot for my friends flower shop. He makes custom arranged flowers for fashion brands, weddings, and events. We were shooting a collaboration between his shop and another brand. This was a really cool location because it reminded me of skylines in any older anime and had a moody feel. Featured one of my best friends, Kohei.",
  };

  //Comment this out to use the interface portion of the code//
  //Type Guard//
  let x: Location = {
    location: 10,
  };

  let y: Desc = {
    desc: "This is an image I took during my time in Tokyo in 2019. It was taken after I just finished working on a large production for a major brand. I had a lot of fun shooting that day so this shot after work is always memorable to me. Somewhere in western Tokyo..",
  };

  function locationF(): string {
    if (typeof x.location === "string") {
      return x.location;
    } else {
      return "Location Unknown";
    }
  }

  function descF(): string {
    if (typeof y.desc === "string") {
      return y.desc;
    } else {
      return "No Description Available";
    }
  }
  //Type Guard//
  //Comment this out to use the interface portion of the code//

  return (
    <div className="App">
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={river} alt="1" />
            <div className="img__desc">
              <p>{descF()}</p>
              <br />
              <br />
              <p>Location: {locationF()}</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={train} alt="2" />
            <div className="img__desc">
              <p>{Train.desc}</p>
              <br />
              <br />
              <p>Location: {Train.location}</p>
            </div>{" "}
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={ral} alt="3" />
            <div className="img__desc">
              <p>{Ral.desc}</p>
              <br />
              <br />
              <p>Location: {Ral.location}</p>
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={denwa} alt="4" />
            <div className="img__desc">
              <p>{Denwa.desc}</p>
              <br />
              <br />
              <p>Location: {Denwa.location}</p>
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={hana} alt="5" />
            <div className="img__desc">
              <p>{Hana.desc}</p>
              <br />
              <br />
              <p>Location: {Hana.location}</p>
            </div>{" "}
          </div>{" "}
        </SplideSlide>
        <SplideSlide>
          <div className="img__wrap">
            <img className="img__img" src={kohei} alt="6" />
            <div className="img__desc">
              <p>{Kohei.desc}</p>
              <br />
              <br />
              <p>Location: {Kohei.location}</p>
            </div>{" "}
          </div>{" "}
        </SplideSlide>
      </Splide>{" "}
    </div>
  );
}

export default App;
