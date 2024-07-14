'use client';
import Hero2 from '@/app/ui/Hero/Hero2';
import Hero12 from "@/app/ui/Hero/Hero12"; // Video Showcase Hero
import IconBox from "@/app/ui/IconBox";
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero10 from "@/app/ui/Hero/Hero10";
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostList from "@/app/ui/Post/PostList";
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Campaign',
    links: '#Campaign',
  },
  {
    name: 'Team',
    links: '#teamSection',
  },
];

// FunFact Data
const funfaceData = [
  {
    title: 'Average Waiter Salary',
    factNumber: '~$52K',
  },
  {
    title: 'Average Restaurant Robot Cost',
    factNumber: '~$15.9K',
  },
  {
    title: 'Hotel Robots Invested by 2025',
    factNumber: '~$338M',
  },
  {
    title: 'Increase of 2021 Sales vs 2022 Sales',
    factNumber: '48%',
  },
];

const photosData = [
  {
    title: 'Serving',
    imageUrl: '/images/robots.png',
    href: '#',
  },
  {
    title: 'Carrying',
    imageUrl: '/images/hospital.jpeg',
    href: '#',
  },
  {
    title: 'Cleaning',
    imageUrl: '/images/cleaning.jpg',
    href: '#',
  },
  {
    title: 'Cooking',
    imageUrl: '/images/cooking.jpg',
    href: '#',
  },
];

// Portfolio Data
const portfolioData = [
  {
    title: 'Robourant',
    subtitle: 'See Details',
    href: '/robourant',
    src: '/images/robourant2.png',
  },
];

const showcaseData = [
  {
    introTitle: 'Video Direction (Jul, 2024)',
    title: 'Campaign Video',
    videoUrl: '/video/video-4.mp4',
    href: 'https://www.youtube.com/watch?v=y2KfJ3okwTg',
  },
];

export default function Home() {
  return (
    <>
      <Hero10
        title="Perception of Robots <br/> in Restaurants"
        subtitle="Ethics/Privacy/Security/Trust/Human"
        btnLink="/blog"
        btnText="See Blog"
        shape2Url="/images/hero_img_3.png"
        shape3Url="/images/hero_img_4.png"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Fun fact"
          subtitle="Robots are making significant strides in the hospitality industry, enhancing operational efficiency and guest experiences. Their increased adoption has pushed the industry to rethink about human versus robot service."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Photo Section */}
      <Hero2 data={photosData} onClick={(e) => e.preventDefault()}/>
      {/* End Photo Section */}
        
      {/* Start Service Section */}
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title="The Concerns of Robots in Hospitality Industry"
          subtitle='Analysis' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title="Ethical and Social Considerations"
              subtitle={`Address the potential for job displacement by upskilling and reskilling employees to work alongside robots or take on new roles created by technological advancements. <br/> <br/>
              Privacy and security are paramount, necessitating robust data protection measures and transparency about data usage. <br/><br/>
              It's also important to ensure that robots are inclusive and accessible to all guests, accommodating a diverse range of needs and abilities.`}
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Customer Experience and Interaction'
              subtitle={`Enhance service by incorporating robots that can remember guest preferences and provide personalized recommendations. <br/><br/>
              It's crucial to strike a balance between automation and the human touch, allowing robots to handle routine tasks while human staff manage more complex or sensitive interactions. <br/><br/>
              Additionally, robots should have an intuitive design, with clear instructions and accessibility features, ensuring all guests can easily use them.`}
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Operational Efficiency and Integration'
              subtitle={`Robots should seamlessly integrate into existing workflows, complementing the efforts of human staff to improve overall efficiency. <br/><br/>
              Reliability and ease of maintenance are key, requiring regular maintenance schedules and quick troubleshooting protocols to ensure continuous service. <br/><br/>
              Proper data management practices should be in place to analyze collected data for ongoing improvement while safeguarding guest privacy and security.`}
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Video Block Section */}
      <div id="Campaign">
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            {/* What can we do to combat the <br /> negative perception of robots? */}
              <SectionHeading
              title="What can we do to combat the <br /> negative perception of robots?"
              subtitle="An Ideal Solution?"
              variant="cs-style1 text-center"
            />
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=y2KfJ3okwTg"
            bgUrl="/images/video_bg_robot.png"
          />
        </Div>
      </div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <div id="teamSection">
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        <Spacing lg="150" md="80" />
      </div>

      {/* Start Blog Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}
      
      {/* Start Portfolio Section */}
      <Div>
        <Div className="container">
          <SectionHeading
            title="Robourant Board Game"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Portfolio Section */}



      <Hero12
        showcaseData={showcaseData}
      />

      <Spacing lg="150" md="80" />  
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
  );
}
