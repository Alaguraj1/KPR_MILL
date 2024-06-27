"use client";
import Layout from "@/components/layout/Layout";
import Gallery from "@/components/elements/Gallery";

export default function Garments() {
  const data = [
    {
      id: 1,
      src: "/assets/images/resource/dream-1.jpg",
    },
    {
      id: 2,
      src: "/assets/images/resource/dream-1.jpg",
    },
    {
      id: 3,
      src: "/assets/images/resource/dream-1.jpg",
    },
    {
      id: 4,
      src: "/assets/images/resource/dream-1.jpg",
    },
    {
      id: 5,
      src: "/assets/images/resource/dream-1.jpg",
    },
    {
      id: 6,
      src: "/assets/images/resource/dream-1.jpg",
    },
  ];
  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Garment">
        <section className="dream-style-three p_relative">
          <div className="auto-container">
            {/* <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                ELEMENTUM TEMPUS
              </span>
              <h2>
              YARN
              </h2>
            </div> */}
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>GARMENT</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        KPR offers supreme range of high quality knitted
                        garments for men, women and children out of 100%
                        conventional cotton, organic cotton, cotton blends and
                        fair trade cotton.
                      </p>
                    </div>
                    <div className="text mb_25">
                      <h5 style={{ fontWeight: "500", marginBottom: "5px" }}>
                        Garment Types
                      </h5>
                      <p>
                        Casual wear, Sports wear, Active wear, Sleep wear, Work
                        wear
                      </p>
                    </div>

                    <div className="text mb_25">
                      <h5 style={{ fontWeight: "500", marginBottom: "5px" }}>
                        Garment manufacturing capacity
                      </h5>
                      <p>147 million garments per annum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="dream-style-three p_relative"
          style={{ padding: "0px" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Men’s Wear</h3>
                    </div>
                    <div className="text mb_25">
                      <p>
                        KPR produces Men’s garment wear made from best quality
                        fabric. We have a wide ranging collection of men’s wear
                        available in contemporary designs and diversified
                        colours. Our garments come up with the assurance of
                        ‘easy to wash’, ‘enduring freshness’ and ‘soothing
                        comfort level.’
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box pl_3">
                  <figure className="image">
                    <img src="/assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative">
          <div className="auto-container">
            {/* <div className="sec-title  mb_30 text-center">
              <span className="sub-title" style={{ color: "black" }}>
                ELEMENTUM TEMPUS
              </span>
              <h2>
              YARN
              </h2>
            </div> */}
            <div class="row clearfix">
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-2 content-column">
                <div className="content_block_two">
                  <div className="content-box p_relative d_block">
                    <div className="sec-title mb_5">
                      {/* <span className="sub-title">Reach Your Dream</span> */}
                      <h3>Women’s Wear</h3>
                    </div>

                    <div className="text mb_25">
                      <p>
                        KPR presents a unique collection of trendy Ladies Knit
                        Wear in special as well as modern designs and vibrant
                        colour combinations. Made from soft fabric, these modish
                        knit wears are easy to wash and maintain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 order-lg-1 image-column">
                <div class="image-box pl-3">
                  <figure class="image">
                    <img src="/assets/images/resource/dream-1.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dream-style-three p_relative" style={{ paddingTop: "0px" }}>
          <div className="auto-container">
            <div className="sec-title mb_5 text-center">
              <span className="sub-title">Reach Your Dream</span>
              <h2>GALLERY</h2>
            </div>
            <Gallery data={data} />
          </div>
        </section>
      </Layout>
    </>
  );
}
