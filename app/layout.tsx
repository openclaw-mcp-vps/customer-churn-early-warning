import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Predict Customer Churn Before It Happens',
  description: 'Analyze support ticket sentiment to identify customers likely to churn within 30 days. AI-powered churn risk scores and intervention recommendations for B2B SaaS customer success teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="57474b62-91d7-43ad-a79e-cc1d929db7c5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
