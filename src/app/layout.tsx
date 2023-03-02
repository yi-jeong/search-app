'use client'
import { Global } from "@emotion/react"
import { RecoilRoot } from "recoil"
import DataInit from "./api/api"
import { GlobalStyle } from "./assets/style/global-style"

// export const metadata = {
//   title: '금수를 부탁해',
//   description: '금수를 부탁해',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
      <body>
        <RecoilRoot>
          <Global styles={GlobalStyle} />
          <DataInit />
          {children}
        </RecoilRoot>
      </body>
    </html>
  )
}
