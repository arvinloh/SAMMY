'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import imgUrl from '../../../../public/images/post_4.jpeg';

export default function RiseRobots() {
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Economic and Cultural Impact of Service Robots in the Hospitality Industry'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='eco-culture'
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
                  <span className="cs-posted_by">07 Jul 2024</span>
                  <Link href="/blog/rise-robots" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">Multifaceted impact of technological advancements.n</h2>
                <p>The introduction of service robots in the hospitality industry is reshaping not only business operations but also economic and cultural landscapes. This article explores the multifaceted impact of these technological advancements.</p>
                <blockquote className="cs-primary_font">
                Robotics is not about making machines to serve us. It's about creating machines that can be our partners.
                  <small>Cynthia Breazeal</small>
                </blockquote>
                <h3>Economic Impact</h3>
                <p>The global market for hotel robots is projected to grow from $79 million in 2020 to $338 million by 2025, reflecting a compound annual growth rate (CAGR) of 32.8% (<a href="https://hoteltechnologynews.com/2022/09/how-hotels-are-using-robots-to-reduce-costs-improve-operations-and-enhance-the-guest-experience/">Hotel Technology News</a>). This growth is driven by the need for cost-effective solutions and enhanced operational efficiency. Robots reduce labor costs by performing repetitive tasks and allowing human staff to focus on more complex, customer-facing roles.</p>                <Div className="row">
                  {/* <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div> */}
                  <h3>Cultural Acceptance</h3>
                  <p>Cultural responses to robots vary significantly. For example, during the COVID-19 pandemic, Chinese consumers showed a stronger preference for robot-staffed hotels over human-staffed ones compared to their American counterparts​ (Boston University)​. Understanding these cultural differences is crucial for hospitality managers to strategically deploy robots and maximize customer satisfaction.</p>

                  <h3>Technological Advancements                  </h3>
                  <p>Advances in artificial intelligence (AI) and robotics are making robots more accessible and efficient. AI-driven tools are enhancing personalization in guest services, from digital concierges to voice-activated room controls​ (EHL Insights)​. These technologies not only improve service quality but also ensure safety and hygiene, which are critical in the post-pandemic era.</p>

                  <h3>Conclusion                  </h3>
                  <p>The economic and cultural impacts of service robots in the hospitality industry are profound. As adoption continues to grow, businesses must navigate these changes thoughtfully, leveraging technology to enhance both operational efficiency and customer satisfaction.</p>

                  <h3>References</h3>
                  <p>Hotel Technology News. (2022). How Hotels Are Using Robots to Reduce Costs, Improve Operations, and Enhance the Guest Experience. Retrieved from https://hoteltechnologynews.com/2022/09/how-hotels-are-using-robots-to-reduce-costs-improve-operations-and-enhance-the-guest-experience/</p>
                    <p>Boston University. (n.d.). Cultural Differences in the Acceptance of Robots. Retrieved from https://www.bu.edu/articles/2021/cultural-differences-in-the-acceptance-of-robots/</p>
                    <p>EHL Insights. (n.d.). The Future of Hospitality: How AI and Robotics Are Transforming the Industry. Retrieved from https://hospitalityinsights.ehl.edu/ai-robotics-hospitality</p>
                </Div>
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
