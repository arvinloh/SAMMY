import React from 'react';
const postData = [
  {
    title: 'The Rise of Robots in Restaurants: Transforming the Dining Experience',
    postHref: '/blog/rise-robots',
    subtitle:
      'Globally, the adoption of robots in restaurants is accelerating. For instance, in 2022, over 553,052 industrial robots were installed worldwide, marking a significant increase from previous years​,',
    authorName: 'SAMMY',
    authorImg: '/images/SAMMY.png',
    authorDesignation: 'Melbourne, Australia',
    date: '09',
    month: 'Jul',
    year: '2024',
  },
  {
    title: 'Future Prospects of Robotics in the Restaurant Industry',
    postHref: '/blog/future-robot',
    subtitle:
      'The future of the restaurant industry is increasingly intertwined with the advancements in robotics. ',
    authorName: 'SAMMY',
    authorImg: '/images/SAMMY.png',
    authorDesignation: 'Melbourne, Australia',
    date: '8',
    month: 'Jul',
    year: '2024',
  },
  {
    title: 'Economic and Cultural Impact of Service Robots in the Hospitality Industry',
    postHref: '/blog/eco-culture',
    subtitle:
      'The introduction of service robots in the hospitality industry is reshaping not only business operations but also economic and cultural landscapes.',
    authorName: 'SAMMY',
    authorImg: '/images/SAMMY.png',
    authorDesignation: 'Melbourne, Australia',
    date: '7',
    month: 'Jul',
    year: '2024',
  },
];

export default function PostList() {
  return (
    <ul className="cs-post_3_list cs-mp0">
      {postData.map((item, index) => (
        <li key={index}>
          <div className="cs-post cs-style3">
            <div className="cs-post_left">
              <div className="cs-posted_by">
                <span className="cs-primary_font">{item.date}</span>
                <span>
                  {item.month} <br />
                  {item.year}
                </span>
              </div>
            </div>
            <div className="cs-post_right">
              <h2 className="cs-post_title">
                <a href={item.postHref}>{item.title}</a>
              </h2>
              <div className="cs-post_subtitle">{item.subtitle}</div>
              <div className="cs-post_meta">
                <div className="cs-post_avatar">
                  <div className="cs-post_avatar_img">
                    <img src={item.authorImg} alt="Avatar" />
                  </div>
                  <div className="cs-post_avatar_info">
                    <h4>{item.authorName}</h4>
                    <p>{item.authorDesignation}</p>
                  </div>
                </div>
                <a href={item.postHref} className="cs-text_btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
