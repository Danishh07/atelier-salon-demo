import Hero from './components/Hero'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Studio from './components/Studio'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-atelier-black">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Studio />
        <Artists />
        <Gallery />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
