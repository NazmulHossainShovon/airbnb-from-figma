import React from "react";
import "./Kicker.css";
import DotSVG from "./DotSVG";
import EarthSVG from "./EarthSVG";
import DollarSVG from "./DollarSVG";
import SocialSVG from "./SocialSVG";

export default function Kicker() {
  return (
    <div className="kicker-container">
      <div className="left-kicker">
        <p className="left-kicker-text">© 2022 Airbnb, Inc.</p>
        <div className="kicker-svg">
          <DotSVG />
        </div>

        <p className="left-kicker-text">Privacy</p>
        <div className="kicker-svg">
          <DotSVG />
        </div>
        <p className="left-kicker-text">Terms</p>
        <div className="kicker-svg">
          <DotSVG />
        </div>
        <p className="left-kicker-text">Sitemap</p>
      </div>
      <div className="right-kicker">
        <div className="kicker-svg">
          <EarthSVG />
        </div>

        <p className="language-text">English (US)</p>
        <div className="kicker-svg">
          <DollarSVG />
        </div>

        <p className="currency">USD</p>
        <div className="kicker-svg">
          <SocialSVG />
        </div>
      </div>
    </div>
  );
}
