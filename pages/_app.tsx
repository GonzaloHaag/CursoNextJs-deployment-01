import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css';


type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
  /*
  Estamos diciendo que en nuestro getLayout podemos recibir
  la pagina y que es opcional por eso los :
  */
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
   {/*<h1>Mi app</h1> Se mostrara en todas las pages */}
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
