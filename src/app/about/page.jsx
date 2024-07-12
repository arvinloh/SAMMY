'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about2.jpeg'
import aboutImg2 from '../../../public/images/about1.jpeg'
import aboutImg3 from '../../../public/images/about3.jpeg'



const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40K',
  },
  {
    title: 'Project Completed',
    factNumber: '50K',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="What is SAMMY?"
              subtitle="Monash RED Team"
            >
              <Spacing lg="30" md="20" />
                <li><strong>S</strong>herena Simangunsong</li>
                <li><strong>A</strong>rvin Hay (Kwan Ming)</li>
                <li><strong>M</strong>atthew Yau</li>
                <li><strong>M</strong>ilos Milojevic</li>
                <li><strong>Y</strong>uga Gunawan (Arkayuga)</li>
                <br />
                <p style={{ textDecoration: 'underline' }}>It is our initials combined to form SAMMY.</p>
                <br />
                <p className="cs-m0">
                  We are a dedicated team from Monash RED focused on researching the critical geopolitical security challenges posed by robots in public spaces. Specifically, we decided to explore public perception of robots in environments such as restaurants and work towards finding an ideal solution.
                </p>
                <br />
                <p className="cs-m0">
                  Throughout our journey, we have meticulously considered all stakeholders, ethical implications, various proposals, and relevant statistics to deepen our understanding of the problem space. Our website showcases our findings and our proposed ideal solution - the campaign.
                </p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image
              src={aboutImg}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Team Section */}
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
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
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
