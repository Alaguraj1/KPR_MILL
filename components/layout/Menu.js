"use client";
import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Maven_Proior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        {/* <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">Home Page 04</Link></li>
                        <li><Link href="/onepage">OnePage Home</Link></li>
                       
                    </ul>
                </li> */}
        <li className="dropdown">
          <Link href="/about-us">About</Link>
          <ul>
            <li className="dropdown">
              <Link href="/">Team</Link>
              <ul>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/team-details">Team Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about-us">About The Company</Link>
            </li>
            <li>
              <Link href="/vision-mission">Vision & Mission</Link>
            </li>
            <li>
              <Link href="/evolution">Evolution</Link>
            </li>
            <li>
              <Link href="/the-board">The Board</Link>
            </li>
            <li>
              <Link href="/production-facilities">Production Facilities</Link>
            </li>
            <li>
              <Link href="/awards">Awards</Link>
            </li>
            <li>
              <Link href="/certifications">Certifications</Link>
            </li>
            <li>
              <Link href="/faq">Faq's</Link>
            </li>
            <li>
              <Link href="/error">404</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/">Products</Link>
          <ul>
            <li>
              <Link href="/coaching">Coaching Overview</Link>
            </li>
            <li>
              <Link href="/coaching-details">IELTS Coaching </Link>
            </li>
            <li>
              <Link href="/coaching-details-2">PTE Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-3">OET Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-4">GRE Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-5">GMAT Coaching</Link>
            </li>
            <li>
              <Link href="/coaching-details-6">SAT Coaching</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/">Our Brand</Link>
          <ul>
            <li>
              <Link href="/countries">Countries Overview</Link>
            </li>
            <li>
              <Link href="/countries-details">United States</Link>
            </li>
            <li>
              <Link href="/countries-details-2">United Kingdom</Link>
            </li>
            <li>
              <Link href="/countries-details-3">Canada</Link>
            </li>
            <li>
              <Link href="/countries-details-4">China</Link>
            </li>
            <li>
              <Link href="/countries-details-5">Bahamas</Link>
            </li>
            <li>
              <Link href="/countries-details-6">Australia</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/">Infrastructure</Link>
          <ul>
            <li>
              <Link href="/visa">Visa Overview</Link>
            </li>
            <li>
              <Link href="/visa-details">Business Visa</Link>
            </li>
            <li>
              <Link href="/visa-details-2">Working Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-3">Residence Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-4">Student Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-5">Spouse/Family Visas</Link>
            </li>
            <li>
              <Link href="/visa-details-6">Tourist Visas</Link>
            </li>
          </ul>
        </li>
        {/* Projects */}

        <li className="dropdown">
          <Link href="/">Investors</Link>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>

        {/* Blog */}
        <li className="dropdown">
          <Link href="/">Careers</Link>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/">CSR</Link>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>
        {/* Contact */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
