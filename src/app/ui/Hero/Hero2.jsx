import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import Div from '../Div';

export default function Hero2({data, phoneNumber, email}) {
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Additional logic here if needed
  };

  return (
    <Div className="cs-hero cs-style2" id="home">
      <Div className="container">
        <Div className="cs-hero_tab">
          {data.map((item, index) => (
            <Div key={index} className={`cs-hero_tab_item cs-hover_tab ${active === index ? 'active' : ''}`}>
              <Div className="cs-hero_tab_img cs-bg" style={{backgroundImage: `url(${item.imageUrl})`}} />
              <h2 onMouseEnter={() => handleActive(index)}>
                <Link href={item.href} passHref onClick={handleClick}>
                  {item.title}
                </Link>
              </h2>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}