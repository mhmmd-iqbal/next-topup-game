import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './organisms/Footer';
import Navbar from './organisms/Navbar';

interface LayoutPropsInterface {
    children: ReactNode
}
export default function layout(props: LayoutPropsInterface) {
  const { children } = props;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Checkout StoreGG</title>
      </Head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </>
  );
}
