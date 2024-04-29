export const metadata = {
  title: 'CMS | Zagrebačka Zalagaonica',
  description: 'Zagrebačka Zalagaonica CMS',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
