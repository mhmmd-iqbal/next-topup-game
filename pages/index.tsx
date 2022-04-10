import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../component/organisms/Navbar';
import MainBanner from '../component/organisms/MainBanner';
import TransactionStep from '../component/organisms/TransactionStep';
import FeaturedGame from '../component/organisms/FeaturedGame';
import Footer from '../component/organisms/Footer';
import Reached from '../component/organisms/Reached';
import Story from '../component/organisms/Story';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
