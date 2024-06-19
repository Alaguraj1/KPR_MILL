import React from 'react';
import Link from 'next/link';
export default function Features() {
    return (
        <section className="feature-section alternat-3">
      <div className="auto-container">
        <div className="inner-container">
          {/* <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-41.png)' }}></div> */}
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><img src="assets/images/kprmill/home/icon-1.png" alt="" /></div>
                  <h3><Link href="/">What's New</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><img src="assets/images/kprmill/home/icon-3.png" alt="" /></div>
                  <h3><Link href="/">About Us</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><img src='assets/images/kprmill/home/icon-2.png' alt='' /></div>
                  <h3><Link href="/">Awards</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
              <div className="feature-block-one">
                <div className="inner-box">
                  <div className="icon-box"><img src="assets/images/kprmill/home/icon-4.png" alt="" /></div>
                  <h3><Link href="/">Certifications</Link></h3>
                  <p>Sed gravida nisl a porta tincidunt. an Integer aliquam nisi sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

