export const metadata = {
  title: '금수를 부탁해',
  description: '금수를 부탁해',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
