import './App.scss'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Rate from './components/Rate/Rate'
import Сhannels from './components/Сhannels/Сhannels'
import Partners from './components/Partners/Partners'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import AllDevices from './components/AllDevices/AllDevices'
import backgroundCenter from './assets/webp/background-center.webp'
import backgroundBottom from './assets/webp/background-bottom.webp'
import pump3 from './assets/webp/pump-3.webp'
import pump2 from './assets/webp/pump-2.webp'

function App() {
  return (
    <div>
      <div className='background'>
        <img src={backgroundCenter} alt="Background Center" className='background_center' />
        <img src={backgroundBottom} alt="Background Bottom" className='background_bottom' />
        <div className='pumps'>
          <img src={pump3} alt="pump3" />
          <img src={pump2} alt="pump2" />
        </div>
      </div>
      <Header />
      <Intro />
      <Rate />
      <Сhannels />
      <AllDevices />
      <Partners />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
