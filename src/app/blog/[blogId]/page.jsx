'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Sidebar from "@/app/ui/Sidebar.jsx";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import imgUrl from '@/public/images/post_5.jpeg';

const blogPosts = {
  'rise-robots': {
    title: 'The Rise of Robots in Restaurants: Transforming the Dining Experience',
    date: '09 Jul 2024',
    content: `
      <p>Globally, the adoption of robots in restaurants is accelerating...</p>
      <blockquote>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...</blockquote>
      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...</p>
    `
  },
  'future-robot': {
    title: 'Future Prospects of Robotics in the Restaurant Industry',
    date: '08 Jul 2024',
    content: `
      <p>The future of the restaurant industry is increasingly intertwined with the advancements in robotics.</p>
      <blockquote>The advancements in robotics will continue to shape the future...</blockquote>
      <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...</p>
    `
  },
  'eco-culture': {
    title: 'Economic and Cultural Impact of Service Robots in the Hospitality Industry',
    date: '07 Jul 2024',
    content: `
      <p>The introduction of service robots in the hospitality industry is reshaping not only business operations but also economic and cultural landscapes.</p>
      <blockquote>Service robots are becoming an integral part of the hospitality industry...</blockquote>
      <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...</p>
    `
  }
};

export default function BlogPost({ params }) {
  const { blogId } = params;
  const post = blogPosts[blogId];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <PageHeading
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={post.title}
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <Image src={imgUrl} alt="Post" className="w-100 cs-radius_15" placeholder="blur" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">{post.date}</span>
                  <Link href={`/blog/${blogId}`} className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">{post.title}</h2>
                <div className="cs-post_sub_title" dangerouslySetInnerHTML={{ __html: post.content }} />
              </Div>
            </Div>
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
              </Div>
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
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Help us in our campaign by filling up a questionnaire' 
          btnText='Form' 
          btnLink='https://forms.gle/A8dzDrUfjDeY7HMk9' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  );
}
