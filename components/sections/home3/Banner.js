import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <section
      className="banner-style-three p_relative"
      style={{ backgroundImage: "url(assets/images/kprmill/home/banner.jpg)" }}
    >
      {/* <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/kprmill/home/banner.jpg)' }}>
        <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-38.png)' }}></div>
        <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-39.png)' }}></div>
        <div className="pattern-3" style={{ backgroundImage: 'url(assets/images/shape/shape-40.png)' }}></div>
      </div> */}
      {/* <figure className="image-layer"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure> */}
      <div className="auto-container">
        <div className="content-box">
          <h2>
           Unleash <br/><span>Your Inner</span><br/>Fashionista
          </h2>
          <p>
            MCS has been recruiting and prepping talented professionals for over
            twenty years. We provide a unique value proposition.
          </p>
          <div className="btn-box">
            <Link href="/" className="theme-btn btn-two">
              <span>Know More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
