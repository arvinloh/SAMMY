'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import imgUrl from '../../../../public/images/post_5.jpeg';

export default function RiseRobots() {
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Future Prospects of Robotics in the Restaurant Industry'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='future-robot'
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          {/* <Div className="col-lg-8"> */}

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <Image src={imgUrl} alt="Post" className="w-100 cs-radius_15" placeholder="blur" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">08 Jul 2024</span>
                  <Link href="/blog/rise-robots" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">Current trends and future prospects of robotics</h2>
                <p>The future of the restaurant industry is increasingly intertwined with the advancements in robotics. This article delves into the current trends and future prospects of robotics in dining establishments.</p>

                <blockquote className="cs-primary_font">
There are an endless number of things to discover about robotics. A lot of it is just too fantastic for people to believe.
                  <small>Daniel H. Wilson.</small>
                </blockquote>
                <h3>Current Trends
                </h3>
                <p>The adoption of robots in restaurants is on the rise, with significant installations reported globally. For example, the International Federation of Robotics recorded over 553,052 robot installations in 2022, with a substantial portion being deployed in Asia​ (IndMacDig | Industrial Machinery Digest)​​ (IFR International Federation of Robotics)​. This trend is particularly strong in countries like China, which leads in robot installations.</p>
                <h3>Operational Benefits
                </h3>
                <p>Robots in restaurants offer numerous benefits, including improved efficiency, reduced labor costs, and enhanced service consistency. Robots can work around the clock, handling tasks such as taking orders, delivering food, and even cooking. This continuous operation helps restaurants manage peak hours more effectively and maintain high service standards​ (Hotel Technology News)​.</p>

                <h3>Customer Interactions                 </h3>
                <p>Robots are also transforming customer interactions. Innovations like robot butlers and digital concierges provide personalized services that enhance the dining experience. Moreover, the ability to integrate AI with robotics allows for more engaging and interactive customer services​ (EHL Insights)​.</p>

                <h3>Future Prospects
                </h3>
                <p>Looking ahead, the integration of AI and robotics in restaurants is expected to grow. The market for service robots is projected to expand significantly, driven by the need for efficient, safe, and hygienic service solutions. As technology advances, we can anticipate robots becoming even more integral to restaurant operations, offering innovative solutions to longstanding industry challenges.</p>

                <h3>Conclusion</h3>
                <p>The future of the restaurant industry lies in the continued adoption and integration of robotics. With ongoing technological advancements and increasing acceptance, robots are set to play a pivotal role in shaping the dining experiences of tomorrow.</p>

                <h3>References</h3>
                <p>IndMacDig | Industrial Machinery Digest. (n.d.). Retrieved from https://industrialmachinerydigest.com/​</p>
                <p>IFR International Federation of Robotics. (n.d.). Retrieved from https://ifr.org/​</p>
                <p>Hotel Technology News. (n.d.). Retrieved from https://hoteltechnologynews.com/​</p>
                <p>EHL Insights. (n.d.). Retrieved from https://insights.ehl.edu/​</p>
                
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          {/* <Div className="col-xl-3 col-lg-4 offset-xl-1"> */}
            {/* Start Sidebar */}
            {/* <Spacing lg='0' md='80'/>
            <Sidebar /> */}
            {/* End Sidebar */}
          {/* </Div> */}
        </Div>
      {/* </Div> */}
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title='Help us in our campaign by filling up a questionnaire' 
          btnText='Form' 
          btnLink='https://forms.gle/A8dzDrUfjDeY7HMk9' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
