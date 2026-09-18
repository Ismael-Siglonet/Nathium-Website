import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollSequence from '../ui/ScrollSequence'
import ScrollToTop from '../ui/ScrollToTop'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollSequence />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
