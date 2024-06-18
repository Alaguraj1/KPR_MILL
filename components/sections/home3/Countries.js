"use client";
import CountriesSlider from "@/components/slider/CountriesSlider";
import Link from "next/link";
import React, {useState} from "react";

export default function Countries() {

  const [activeIndex, setActiveIndex] = useState(4);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };


  return (
    <section className="countries-style-three alternat-2 sec-pad">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(assets/images/kprmill/home/fash-bg-img.png)" }}
      ></div>
      <div className="auto-container">
        <div className="sec-title mb_60 centred">
          <span className="sub-title">ELEMENTUM TEMPUS</span>
          <h2>
           Fashion From Business
          </h2>
        </div>
        <div className="tabs-box">
          <div className="tab-btn-box mb_50">
            <div className="tab-btns tab-buttons" role="tablist">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-link" onClick={() => handleOnClick(4)}>
                    <div
                      className={
                        activeIndex == 4 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img src="assets/images/kprmill/home/fas-icon-1.png" alt=""/> Spinning
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(5)}>
                    <div
                      className={
                        activeIndex == 5 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img src="assets/images/kprmill/home/fas-icon-4.png" alt=""/> Knitting
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(6)}>
                    <div
                      className={
                        activeIndex == 6 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img src="assets/images/kprmill/home/fas-icon-3.png" alt=""/> Processing
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                  <div className="nav-item" onClick={() => handleOnClick(7)}>
                    <div
                      className={
                        activeIndex == 7 ? "tab-btn active" : "tab-btn"
                      }
                    >
                      <h3>
                        <img src="assets/images/kprmill/home/fas-icon-2.png" alt=""/> Garments
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-content wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div
              className={
                activeIndex == 4
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/kprmill/home/fas-ic-1.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/kprmill/home/fas-ic-2.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/kprmill/home/fas-ic-3.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/kprmill/home/fas-ic-4.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 5
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-14.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-13.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-15.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-16.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 6
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-15.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-13.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-14.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-16.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                activeIndex == 7
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-13.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">United Kingdom</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-16.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Brazil</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-14.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Bahamas</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                  <div className="countries-block-four">
                    <div className="inner-box">
                      <div className="flag">
                        <img src="assets/images/icons/flag-15.png" alt="" />
                      </div>
                      {/* <h3>
                        <Link href="index-3">Canada</Link>
                      </h3> */}
                      <p>
                        Vivamus ac ultricies ex. Donec lacinia lacus libero, sed
                        feugiat diam laoreet eget
                      </p>
                      <Link href="index-3">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="countries-style-four sec-pad">
    //   <div
    //     className="pattern-layer"
    //     style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}
    //   ></div>
    //   <div className="auto-container">
    //     <div className="sec-title centred mb_60">
    //       <span className="sub-title">Countries We Offer</span>
    //       <h2>
    //         Immigration Officials approvals for foreign <br />
    //         citizens can vary by country.
    //       </h2>
    //     </div>
    //     <div className="content-box">
    //       {/*Theme Carousel*/}
    //       <CountriesSlider />
    //     </div>
    //   </div>
    // </section>
  );
}
