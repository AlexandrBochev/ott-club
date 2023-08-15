import './App.scss'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Rate from './components/Rate/Rate'
import Сhannels from './components/Сhannels/Сhannels'
import { introContent } from './database/content'
import { introContent2 } from './database/content'
import IntroDevices from './components/Intro/IntroDevices/IntroDevices'
import IntroDevices2 from './components/Intro/IntroDevices2/IntroDevices2'

function App() {
  return (
    <div>
      <Header />
      <Intro introContent={introContent} introDevices={IntroDevices}/>
      <Rate />
      <Сhannels />
      <Intro introContent={introContent2} introDevices={IntroDevices2}/>
    </div>
  )
}

export default App
