"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBuilding, FaUserGraduate, FaStar } from "react-icons/fa";
import Image from "next/image";
import { CustomDate } from "@/utils/constant.utils";
import VisaSlider from "@/components/slider/VisaSlider";

export default function Infrastructure() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Evolution">
        <section className="news-section sec-pad">
          {/* <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
              </div> */}
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">Article</span>
              <h2 style={{ fontSize: "18px", lineHeight: "30px" }}>
                Whether it is our finest yarn, functional fabric, the unparallel
                detailing, or the vibrant garments; every KPR product has
                something special to offer. The three quintessential elements
                that contribute significantly to bring you the supreme quality
                KPR collection is the unified efforts of material, men and
                machine.
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-1.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 6, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Model Factory</Link>
                      </h3>
                      <p>
                        We are proud and happy that our facility is a ‘Model
                        Factory’ and many industry stalwarts, senior executives,
                        government officials and internationa delegates have
                        visited KPR.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-2.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 5, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Quality Focus</Link>
                      </h3>
                      <p>
                        We source only the best raw materials and rope in
                        extremely talented individuals and deploy sophisticated
                        as well as modern machines across all departments. Our
                        agile infrastructure has enabled us to offer
                        flexibility, shorter lead time and processing orders of
                        any quantity to our customers.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-3.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 4, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Testing Equipment</Link>
                      </h3>
                      <p>
                        We have installed high-tech quality control and testing
                        equipment such as Uster Tester-5, Uster HVI 1000
                        Spectrum, Uster AFIS Pro-2, Uster Zweigle Hairiness
                        Tester –G566 and UsterClassimate Quantum.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section sec-pad " style={{ padding: "0px" }}>
          {/* <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
              </div> */}
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-4.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 6, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Location Advantage</Link>
                      </h3>
                      <p>
                        Entire operations of the Company are strategically
                        located around 50km radius from Tirupur & Coimbatore –
                        one of the Asia’s largest apparel manufacturing
                        clusters. The close proximity to buyers reduces material
                        handling costs and facilitates immediate feedback on the
                        product quality.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-5.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 5, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Leading-edge Technology</Link>
                      </h3>
                      <p>
                        We have deployed modern as well as sophisticated
                        machines across all departments. The high speed imported
                        machines ensure precision and efficiency. Our state of
                        the art machinery helps us to produce garments on par
                        with international standards.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="#">
                        <img
                          src="/assets/images/kprmill/infrastructure/infrastructure-6.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      {/* <ul className="post-info clearfix">
                        <li>
                          <i className="icon-27"></i>
                          <Link href="blog-details">By author</Link>
                        </li>
                        <li>
                          <i className="icon-28"></i>Feb 4, 2022{" "}
                        </li>
                      </ul> */}
                      <h3>
                        <Link href="#">Vertical Integration</Link>
                      </h3>
                      <p>
                        KPR Mill is one the largest vertical integrated textile
                        companies in Asia. Our careful vertical integration
                        strategy has ensured a smooth and seamless flow of
                        operations across the company.
                      </p>
                      <div className="link-btn">
                        <Link href="#">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* coaching-section */}
        <section className="coaching-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                  <div className="inner-box">
                    <div className="image-box clearfix">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/infrastructure/infra-active-automation.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="#">Active Automation</Link>
                      </h3>
                      <p>
                        Automation through advanced machines has helped us to
                        achieve precision, high quality and timely delivery. Our
                        autoconers are sensor-enabled to ensure faster and
                        better production. Our Automatic Motorized Bobbin
                        Transport System is the most advanced and enables us to
                        speed up production efficiently. While we could improve
                        production efficiency, thus the labor cost is highly
                        economised. Spinbike Plus. Introduction of Spinbike Plus
                        at our facility has increased the comfort level of our
                        workforce by reducing walking by 95%. Moreover, we are
                        able to deploy minimum workforce and increase efficiency
                        better.
                      </p>
                      {/* <div className="link-box">
                        <Link href="coaching-details-3">
                          <span>Read More</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 coaching-block">
                <div className="coaching-block-one">
                  <div className="inner-box">
                    <div className="image-box clearfix">
                      <figure className="image">
                        <img
                          src="/assets/images/kprmill/infrastructure/new-processing-capacity-1.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <Link href="#">New Processing Capacity</Link>
                      </h3>
                      <p>
                        We have also commenced operations in the state of the
                        art Processing Unit II, which will add value to the
                        Garment Division. The advanced technology of cold
                        processing adopted therein reduces the water consumption
                        by 30% and eliminates the usage of salt completely. This
                        eco - friendly facility will economise the cost of
                        production and enhance the Fabric quality with excellent
                        colour uniformity.
                      </p>
                      <div className="link-box">
                        <Link href="coaching-details-2">
                          <span>Read More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* coaching-section end */}

        <section className="dream-style-three p_relative" style={{ paddingTop: "0px" }}>
          <div className="auto-container">
            <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                Truly awe-inspiring!
              </span>
              <h2>Manufacturing Capacity</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-8 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_25 table-responsive-sm">
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th className="text-center">Segment</th>
                            <th className="text-center">Capacity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Spinning</td>
                            <td>
                              3,54,240 spindles to produce 1,00,000 MT of yarn
                              per annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Knitting</td>
                            <td>
                              Capacity to produce 40,000 MT of fabrics per
                              annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Dyeing</td>
                            <td>Processing 25,000 MT per annum.</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Garmenting</td>
                            <td>
                              147 million pieces of readymade knitted apparel
                              per annum.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Power generation</td>
                            <td>
                              66 wind mills with a total captive power
                              generation capacity of 61.92 MW. Co-gen Power
                              Generation Capacity of 90 MW. Roof-Top Power
                              Generation Capacity of 12 MW.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Sugar</td>
                            <td>
                              White Crystal Sugar is made as per the approved
                              standards with Capacity of 20,000 TCD.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Ethanol</td>
                            <td>360 KLPD</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Vortex</td>
                            <td>
                              37,968 Spindles to produce 10,500 MT of Vortex
                              Yarn
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12 image-column">
                <div class="image-box pl-3">
                  <figure class="image"  style={{borderRadius:"none"}}>
                    <img src="/assets/images/kprmill/infrastructure/texdata_mayercie_ovja-1.1-eett_machine-head_899.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
