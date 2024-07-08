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
        title='The Rise of Robots in Restaurants: Transforming the Dining Experience'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='rise-robots'
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
                  <span className="cs-posted_by">09 Jul 2024</span>
                  <Link href="/blog/rise-robots" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">Adoption of robots in restaurants is accelerating</h2>
                <p>The integration of robots in restaurants is rapidly transforming the dining experience, offering a blend of novelty, efficiency, and enhanced customer service. This trend is driven by advancements in robotics and the growing need for automation in the hospitality industry.</p>

                <h3>Adoption of Robotics</h3>
                <p>Globally, the adoption of robots in restaurants is accelerating. For instance, in 2022, over 553,052 industrial robots were installed worldwide, marking a significant increase from previous years​ (IndMacDig | Industrial Machinery Digest)​. Countries like China lead this trend, with annual installations of 290,258 units in 2022 alone​ (IndMacDig | Industrial Machinery Digest)​.</p>

                <h3>Impact on Operations                </h3>
                <p>Robots in restaurants handle various tasks, from taking orders and delivering food to performing basic customer service. This not only improves operational efficiency but also reduces labor costs. Studies have shown that robots can boost productivity by up to 30% compared to human labor​ (The Tech Report)​.</p>

                <h3>Customer Experience
                </h3>
                <p>Robots enhance the customer experience by providing consistent, reliable service. Innovations like robot butlers in hotels, which deliver items to guest rooms 24/7, have significantly improved guest satisfaction scores​ (Hotel Technology News)​. In restaurants, robots reduce wait times and ensure seamless service, which is especially valued during peak hours.</p>

                <h3>Conclusion                </h3>
                <p>The rise of robots in restaurants represents a significant shift towards automation in the hospitality industry. As technology continues to advance, we can expect even greater integration of robots, offering both operational benefits and enhanced customer experiences.</p>

                <h3>Reference</h3>
                <p>IndMacDig | Industrial Machinery Digest. (2022). Global Industrial Robot Installations Reach 553,052 Units in 2022. Retrieved from https://indmacdig.com/global-industrial-robot-installations-reach-553052-units-in-2022/</p>
                
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
