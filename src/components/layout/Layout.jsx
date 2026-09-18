import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollSequence from '../ui/ScrollSequence'
import ScrollToTop from '../ui/ScrollToTop'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <ScrollSequence />
      <Header key={location.key} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
