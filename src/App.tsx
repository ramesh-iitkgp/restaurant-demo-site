/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Menu from './components/Menu';
import HoursAndBooking from './components/HoursAndBooking';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import AppBanner from './components/AppBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <HoursAndBooking />
        <Reviews />
        <FAQ />
        <AppBanner />
      </main>
      <Footer />
    </>
  );
}
