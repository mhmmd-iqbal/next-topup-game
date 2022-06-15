import { useEffect } from 'react';
import AOS from 'aos';
import TransactionStep from '../component/organisms/TransactionStep';
import FeaturedGame from '../component/organisms/FeaturedGame';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <TransactionStep />
      <FeaturedGame />
    </>
  );
}
