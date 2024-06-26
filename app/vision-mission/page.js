"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { useEffect, useState } from "react";
import { singleSlugData } from "@/utils/axios.utils";

import axios from "axios";
import { useSetState } from "@/utils/states.utils";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const [state, setState] = useSetState({
    aboutPage: {},
  });

  useEffect(() => {
    slugData();
  }, []);

  const slugData = async () => {
    try {
      const res = await singleSlugData("about-the-company");
      if (res && res.length > 0) {
        setState({
          aboutPage: res[0],
        });
      } else {
        // Handle the case where the page with the given slug is not found
        console.error("Page not found");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log("state.aboutPage: ", state.aboutPage);

  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle="Vision & Mission"
      >
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                ELEMENTUM TEMPUS
              </span>
              <h2>
                A Largest Vertically Integrated Textile Manufacturer in India
              </h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Vision</h3>
                    </div>

                    <div className="text mb_25">
                      <ul className="about-list-style clearfix">
                        <li>Quality’ – The Maxim of KPR</li>
                        <li>
                          To Ensure a strong presence in the global textile
                          market by focusing on quality and exceeding customer
                          and Stakeholder expectations.
                        </li>
                      </ul>
                    </div>

                    <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_20">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>MISSION</h3>
                    </div>
                    <div className="text mb_25">
                      <ul className="about-list-style clearfix">
                        <li>
                          Offer innovative, customized and value-added services
                          to Customers.
                        </li>
                        <li>
                          Constantly upgrade technology and skill-sets to cater
                          to the ever-changing needs of the Apparel and Textile
                          industry.
                        </li>
                        <li>Become a process-driven organization</li>
                        <li>
                          Prevail the most preferred one-stop source for
                          readymade knitted garments, fabric and yarn.
                        </li>
                        <li>
                          Deliver added value to Customers, Shareholders,
                          Employees and Society, at large.
                        </li>
                        <li>
                          Be an ethical, transparent and responsible Global
                          Organization.
                        </li>
                      </ul>
                    </div>

                    <div className="btn-box">
                      <Link href="coaching" className="theme-btn">
                        <span>More Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h3>{state?.aboutPage?.title?.rendered}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: state?.aboutPage?.content?.rendered,
          }}
        ></div>
      </Layout>
    </>
  );
}
