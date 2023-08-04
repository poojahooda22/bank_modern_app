import styles from './style';
import {Navbar, Hero, Billing, Business, Clients, CTA, Footer, Stats, Testimonials, CardDeal} from './components';
import MouseFollower from "mouse-follower";
import gsap from "gsap";



MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();
const App = () => {
  return (
    <div className= 'bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App

