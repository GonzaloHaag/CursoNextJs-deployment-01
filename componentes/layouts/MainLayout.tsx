import React, { FC } from 'react';

import Head from 'next/head';

import Navbar from '../Navbar';
import styles from '../layouts/MainLayout.module.css';

interface MainLayoutProps {
  //Para indicar que voy a recibir children
  children : React.ReactNode;
}

const MainLayout : FC<MainLayoutProps> = ( { children } ) => {
    return (
        /*Parte que se repite en todas las pages */
        <div className={styles.container}>
          <Head>
            {/*Es la etiqueta head en html, SEO */}
            <title>Home Lalo</title>
            <meta name="description" content="Home page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar /> {/*El navbar esta en todas,probar ponerlo en app */}
          
          <main className={styles.main}>
             
             {/*Esta parte es lo unico que cambia entre las paginas*/}
             {/*La recibo por children */}
             { children }


           
          </main>
        </div>
      )
}

export default MainLayout

