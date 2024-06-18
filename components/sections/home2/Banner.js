"use client";
import Link from "next/link";
import React from "react";
export default function Banner() {
  return (
    <section className="banner-style-two p_relative">
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(assets/images/kprmill/home/banner.jpg)",
        }}
      ></div>
      {/* <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div> */}
      <div className="auto-container">
        <div className="content-box p_relative d_block">
          {/* <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div> */}
          <h2>
            Unleash <span>Your Inner </span> Fashionista
          </h2>
          <p>
            MCS has been recruiting and prepping talented professionals for over
            twenty years. We provide a unique value proposition to both
            experienced financial advisors, as well as beings who want to break
            into the industry.
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
