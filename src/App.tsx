import './App.scss'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Rate from './components/Rate/Rate'
import Сhannels from './components/Сhannels/Сhannels'
import Partners from './components/Partners/Partners'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import AllDevices from './components/AllDevices/AllDevices'
import backgroundCenter from './assets/png/backgroung-center.png'
import backgroundBottom from './assets/png/backgroung-botoom.png'

function App() {
  return (
    <div>
      <div className='background'>
        <img src={backgroundCenter} alt="Background Center" className='background_center' />
        <img src={backgroundBottom} alt="Background Bottom" className='background_bottom' />
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
