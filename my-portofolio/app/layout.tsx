// app/layout.tsx
import {Providers} from './providers'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen transition-colors duration-300">
        <Providers>
          <div className="min-h-screen bg-base-100">
            <main className="container mx-auto px-4">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}