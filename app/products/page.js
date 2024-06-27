"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Products() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="CERTIFICATIONS">
        <section className="certification-style-three p_relative">
          <div className="auto-container">
            <div className="sec-title text-center mb_20">
              <span className="sub-title">Reach Your Dream</span>
              <h2>Products</h2>
            </div>
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12  content-column">
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text text-center">
                      <p>YARN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 mt_30 mt-md-0  content-column">
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text text-center">
                      <p>FABRIC</p>
                    </div>
                  </div>
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
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text text-center">
                      <p>GARMENT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12  mt_30 mt-md-0  content-column">
                <div class="image-box pl-3 mb_20">
                  <figure class="image">
                    <img src="assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="text text-center ">
                      <p>SUGUR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
