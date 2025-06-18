
import './App.css'
import Footer from './component/footer';
import HeroSection from './component/heroSection'
import Introduct from './component/Introduct'
import IntroSection from './component/introSection'

function App() {

  return (
    <div className=''
        style={{
          background: "linear-gradient(0deg,rgba(117, 192, 217, 1) 0%, rgba(174, 216, 242, 1) 100%)"
        }}
    >
      <div className='-z-50'>
        <HeroSection />
      </div>
      <div className='h-[80rem] rounded-4xl' style={{ background: "#FBFBFB" }}>
        <Introduct />
      </div>
      <p className='py-20'></p>
      <div className=''>
        <IntroSection />
      </div>

      <Footer />
    </div>
    

  )
}

export default App
