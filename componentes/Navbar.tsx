
import styles from './Navbar.module.css';
import ActiveLink from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
       {/*FORMA SEMI DINAMICA con el arreglo */}
       {
        menuItems.map ( menuItem => (
          <ActiveLink key={menuItem.href} text= {menuItem.text} href={menuItem.href} />

        ))
      
        /*
        De esta manera si quiero agregar algo a mi navbar, 
        lo agrego en el arreglo y listo
        */
       }
      
      
       {/* 
       <ActiveLink text='Home' href='/' /> Quiero pasar el text y href como prop
       <ActiveLink text = 'About' href='/about' />
       <ActiveLink text = 'Contact' href='/contact' />
       <ActiveLink text='Pricing' href='/pricing' /> 
  */}

  

      </nav>
      
  )
}

export default Navbar