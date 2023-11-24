import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Cards from "../components/cards"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Slider from "react-slick"

const Portofolio = ({ location }) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  }

  return (
    <Layout location={location} title={"Portofolio"}>
      <Seo title="Portofolio" />
      <div className="row py-lg-5">
        <div className="col-lg-9 col-md-8 mx-auto">
          <h1 className="fw-light">My Portofolio</h1>
          <p className="lead text-body-secondary">
            In software development or technology projects, portfolio can refer
            to a collection of projects that are being managed or have been
            completed by a team or organization. It includes projects such as
            software development, system implementation, technology integration,
            and other projects.
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/amtek/kiosk-interface.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/amtek/kiosk-menu.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/amtek/simrs.png"
              alt="amtek-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="AMHES - Amertana Hospital Enterprise Sistem"
            descriptions="This project is to build a health industry using technology that is used to support hospital needs starting from integration with laboratory machines, integration of BPJS, INACBG and insurance claims reporting, as well as hospital management including inventory management, doctor's fees and others."
            path="../src/images/profile-pic"
            tags="Web-Application"
          ></Cards>
        </div>
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-landing.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-handson.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-handson-profile-store.png"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/marzoom-mobile.jpeg"
              alt="marzoom-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Marzoom"
            descriptions="Marzoom is an application that is used to help pricebook users based on the PWA mobile application in searching for information and looking for the cheapest prices as well as being able to find sources of accurate data and high credibility from online and offline (o2o) stores."
            path="../src/images/profile-pic"
            tags="PWA, Web-Application"
          ></Cards>
        </div>
        <div className="col">
          <Slider {...settings}>
            <StaticImage
              src="../images/my-porto/pricebook/mitra-login-one.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/mitra-login-handson.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
            <StaticImage
              src="../images/my-porto/pricebook/mitra-desktop.png"
              alt="mitra-app"
              width={500}
              height={330}
              quality={95}
            />
          </Slider>
          <Cards
            title="Mitra"
            descriptions="Pricebook Partner is an application used to help shop partners or partners of our company, with the PWA mobile application used to manage inventory data, sales analysis, user behavior, user visitors and shop branding in selling gadgets."
            path="../src/images/profile-pic"
            tags="PWA, Web-Application"
          ></Cards>
        </div>
        <div className="col">
          <StaticImage
            src="../images/my-porto/sabi/e-invoicing.png"
            alt="e-invoicing"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="E-Invoicing"
            descriptions="The ultimate e-invoicing app tailored to empower MSMEs. With Sabi E-Invoicing, small and medium-sized MSMEs can effortlessly manage and organize their invoicing data, ensuring precision and clarity in their financial records. This invaluable tool not only streamlines your invoicing process but also compiles comprehensive financial histories, making it a breeze for users to request loans and financial services."
            path="../src/images/profile-pic"
            tags="Web-Application"
          ></Cards>
        </div>
        <div className="col">
          <StaticImage
            src="../images/my-porto/sabi/sabi-landing.png"
            alt="sabi-landing-page"
            width={500}
            height={330}
            quality={95}
          />
          <Cards
            title="Sabi Landing Page - ( LaaS )"
            descriptions="Sabi are account aggregator solution that provides access to business solutions with integrated financing aimed at micro and small business owners. Sabi operates as a member of the Investree Group, which is under the supervision and licensing of the Financial Services Authority (OJK)."
            path="../src/images/profile-pic"
            tags="Web-Application"
          ></Cards>
        </div>
      </div>
    </Layout>
  )
}

Portofolio.propTypes = {
  location: PropTypes.object,
}

export default Portofolio
