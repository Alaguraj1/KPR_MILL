"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Certifications() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="CERTIFICATIONS">
        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title text-center mb_20">
              <span className="sub-title">Reach Your Dream</span>
              <h2>International Accreditations</h2>
              <p>
                End-to-end quality initiatives and consistent technology
                upgradation garnered International accreditation’s:
              </p>
            </div>
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Worldwide Responsible
                        Apparel Production Certificate (WRAP)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Awarded for ensuring apparel
                        production under lawful, humane and ethical conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Ethical Trade Initiative
                        (ETI)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For good working conditions of
                        workers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="certification-style-three p_relative"
          style={{ padding: "0px" }}
        >
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : Global Organic Textile
                        Standard (GOTS)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For organic cotton products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12  mt_30 mt-md-0  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: OEKO-TEX – Certification
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> For raw, semi-finished as well as
                        finished textile products at all processing levels and
                        accessory materials utilised.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization : International Association
                        for Research and Testing
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Certified in the field of Textile
                        Ecology for apparel manufacturing operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: Ministry of Commerce and
                        Trade
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Certified and recognized as a
                        Trading House.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="certification-style-three p_relative"
          style={{ padding: "0px" }}
        >
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: International Organization
                        for Standardization (ISO)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> ISO 14001 : 2004 Certifications for
                        Environment Management Systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: TUV-SIMA (The Southern India
                        Mill’s Association)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> Awarded with 5 star categories for
                        ‘Excellence in code of discipline of providing Women
                        Employment.’
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        Certification/Organization: Social Accountability
                        International (SAI)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text ">
                      <p>
                        <b>Initiative :</b> SA 8000: 2001 for Social
                        Accountability Management System.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="certification-style-three p_relative"
          style={{ paddingTop: "0px" }}
        >
          <div className="auto-container">
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text mb_20">
                      <p style={{ fontWeight: "bold" }}>
                        HIGG INDEX CERTIFICATE FOR ENVIRONMENTAL IMPACT
                        ASSESSMENT
                      </p>
                    </div>
                  </div>
                </div>
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
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
