"use client";
import Link from "next/link";
export default function Footer2() {
  return (
    <>
      <footer className="main-footer style-two">
        <div className="auto-container">
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="assets/images/footer-logo.png" alt="" />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Sed gravida nisl a porta tincidunt. Integer aliquam nisi
                      sit amet magna suscipit, fermentum mattis erat
                      rutrum.Porta semper lacus cursus.
                    </p>
                    {/* <Link href="index-2">Read More</Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget post-widget">
                  <div className="widget-title">
                    <h3>Get In Touch</h3>
                  </div>
                  <div>
                    <div>
                      <ul className="post-info list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                          <i className="fas fa-phone me-2 footer-phone-icon"></i>
                          <p className="mb-0">
                            <Link
                              href="tel:+91-422-2207777"
                              style={{ color: "white" }}
                            >
                              +91-422-2207777
                            </Link>
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <i className="fas fa-envelope me-2 footer-mail-icon"></i>
                          <p className="mb-0">
                            <Link
                              href="mailto:U9l9v@example.com"
                              style={{ color: "white" }}
                            >
                              corporate@kprmill.com
                            </Link>
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <i className="fas fa-map-marker-alt me-2  footer-location-icon"></i>
                          <p className="mb-0" style={{ color: "white" }}>
                            Shrivari Srimat, 1045, Avinashi Road, Coimbatore -
                            641 018, India
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Awards</Link>
                      </li>
                      <li>
                        <Link href="/">Production Facilities</Link>
                      </li>
                      <li>
                        <Link href="/">Quality</Link>
                      </li>
                      <li>
                        <Link href="/">Green Initiatives</Link>
                      </li>
                      <li>
                        <Link href="/">Investors Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget gallery-widget ml_30">
                  <div className="widget-title">
                    <h3>Location</h3>
                  </div>
                  <div className="widget-content">
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31331.41725926444!2d76.97716700000001!3d11.006543000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba906f37daba1cf%3A0xdff6f2f59fd6f481!2sK.P.R%20Mill%20Limited!5e0!3m2!1sen!2sus!4v1718616300170!5m2!1sen!2sus"
                        height="250"
                        width="100%"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              Copyright 2024  &copy; KPR MILL LIMITED. Concept By{" "}
              <Link
                href="https://irepute.in/"
                target="_blank"
                style={{ color: "white" }}
              >
                repute
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
