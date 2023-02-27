'use client'
import MainPage from '@/pages/mainPage'
import { Global } from "@emotion/react";
import { GlobalStyle } from '@/assets/style/global-style';
import { RecoilRoot, atom, selector } from 'recoil';

export default function Home() {
  return (
   <RecoilRoot>
    <Global styles={GlobalStyle} />
    <MainPage />
   </RecoilRoot>
  )
}
