// app/layout.tsx
import Link from 'next/link'
import './globals.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ko">
      <head />
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">홈</Link>
              </li>
              <li>
                <Link href="/about">내 정보</Link>
              </li>
              <li>
                <Link href="/hobbies">취미</Link>
              </li>
              <li>
                <Link href="/github">GitHub</Link>
              </li>
              <li>
                <Link href="/vercel">Vercel</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
