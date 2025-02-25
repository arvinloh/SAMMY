import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link href='https://www.instagram.com/kwan_ming_hay/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  )
}
