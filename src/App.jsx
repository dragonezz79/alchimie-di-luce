import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import IntroCards from './components/IntroCards.jsx';
import About from './components/About.jsx';
import Formation from './components/Formation.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Services from './components/Services.jsx';
import AngelReadings from './components/AngelReadings.jsx';
import DigitalKit from './components/DigitalKit.jsx';
import Booking from './components/Booking.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import { contact } from './data/contact.js';

export default function App() {
  return (
    <main className="site">
      <Header />
      <Hero contact={contact} />
      <IntroCards />
      <About />
      <Formation />
      <HowItWorks />
      <Services />
      <AngelReadings />
      <DigitalKit contact={contact} />
      <Booking contact={contact} />
      <FAQ />
      <Footer email={contact.email} />
    </main>
  );
}
