import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Arvin Hay',
    memberDesignation: 'Computational Science',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      instagram: 'https://www.instagram.com/kwan_ming_hay/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Sherena Simangunsong',
    memberDesignation: 'Psychology',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      instagram: 'https://www.instagram.com/sherena_red24/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'Matthew Yau',
    memberDesignation: 'Machine Learning Engineer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      instagram: 'https://www.instagram.com/myau_red2024/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Arkayuga Gunawan',
    memberDesignation: 'Software Development',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      instagram: 'https://www.instagram.com/arkayuga.monashred24/',
    },
  },
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Milos Milojevic',
    memberDesignation: 'Politics and Philosophy',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      instagram: 'https://www.instagram.com/milos.monashred/',
    },
  },
];

export default function TeamSlider() {
  /** Team Member Data **/

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
