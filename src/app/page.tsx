'use client'
import MainPage from '@/pages/mainPage'
import { Global } from "@emotion/react";
import { GlobalStyle } from '@/assets/style/global-style';

export default function Home() {
  return (
   <>
    <Global styles={GlobalStyle} />
    <MainPage />
   </>
  )
}
