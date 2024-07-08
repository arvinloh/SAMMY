'use client'

import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Pagination from "@/app/ui/Pagination";
import PostStyle2 from "@/app/ui/Post/PostStyle2";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";

const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'The Rise of Robots in Restaurants: Transforming the Dining Experience',
    subtitle:
      'Globally, the adoption of robots in restaurants is accelerating. For instance, in 2022, over 553,052 industrial robots were installed worldwide, marking a significant increase from previous years​,',
    date: '09 Jul 2024',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/rise-robots',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'Future Prospects of Robotics in the Restaurant Industry',
    subtitle:
      'The future of the restaurant industry is increasingly intertwined with the advancements in robotics. ',
    date: '08 Jul 2024',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/future-robot',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'Economic and Cultural Impact of Service Robots in the Hospitality Industry',
    subtitle:
      'The introduction of service robots in the hospitality industry is reshaping not only business operations but also economic and cultural landscapes.',
    date: '07 Jul 2024',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/eco-culture',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
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
