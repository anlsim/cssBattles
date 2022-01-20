import Link from "next/link"
import styles from '../styles/components/_navBar.module.css';
const NavBar = () => {

  const navItems = [
    {
      title: 'HOME',
      link: '/',
    },
    {
      title: 'Battle 1',
      link: '/battle1',
    },
    {
      title: 'Battle 2',
      link: '/battle2',
    },
    {
      title: 'Battle 3',
      link: '/battle3',
    },
    {
      title: 'Battle 4',
      link: '/battle4',
    }
  ]
  return (
    <nav>
      <ul className= {styles.navBar}>
        {navItems.map((item, index)=> {
          return (
            <li className= {styles.navItem}>
              <Link href={item.link}>
                <p>{item.title}</p>
              </Link>
            </li>
          )

        })}
      </ul>
    </nav>
  )
}
export default NavBar 
