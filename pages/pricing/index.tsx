import Link from 'next/link'
import MainLayout from '@/componentes/layouts/MainLayout'
import { Inter } from 'next/font/google'


/*
Al ser el index.tsx de la carpeta pricing, al ir a 
/pricing se mostrara este contenido
*/

const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <MainLayout>
      {/*Aqui dentro ira lo que se manda como children
      es decir, lo unico que cambia en cada pagina */}
        <h1>Pricing page</h1>
      <p>
            Get started by editing&nbsp;
            <code>pages/pricing.tsx</code>
          </p>
        <h3 className={'title'}> {/*Como es una clase global la pongo asi*/}
        
          {/* Ir a <a href='/about'>About</a> */}
          Ir a <Link href='/'>Home</Link>
          {/*Esto evita el refresh al moverme a otra pagina */}
        </h3>
    </MainLayout>
 
  )
}
