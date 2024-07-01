'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { navItems } from '@/constants/Data'
import shapeOne from '../../assets/shape-1.png'
import styles from './nav.module.css'
import { animateScroll } from 'react-scroll'
import { Github, Twitter, Mail } from 'lucide-react'

export function Nav() {
    const pathname = usePathname()
    const [toggle, setToggle] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const toggleNav = () => {
        if(toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    const scrollTop = () => {
      animateScroll.scrollToTop();
    }

    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
  
    useEffect(() => {
      document.body.classList.toggle('no-scroll', toggle);
    }, [toggle]);

    return (
        <header className={`${scrollNav ? styles.scrollNav : ''} ${styles.header}`}>
        <nav className={styles.nav}>
          <Link href='/' className={`${styles.nav__logo} text-cs`} onClick={scrollTop}>
            LV<span className='text-color-primary text-5xl leading-4'>.</span>
          </Link>
  
          <div className={`${toggle ? styles.showMenu : ''} ${styles.nav__menu}`}>
            <div className={`${styles.nav__data}`}>
              <ul className={`${styles.nav__list}`}>
                {navItems.map((item) => {
                  return (
                    <li className={`${styles.nav__item}`} key={item.id}>
                      <Link
                        className={`${styles.nav__link} text-cs`}
                        href={item.url}
                        onClick={toggleNav}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
  
              <div className={styles.nav__socials}>
                <Link
                  href='https://github.com/lizmery'
                  className={`${styles.nav__socialLink} transition ease-in-out hover:-translate-y-1`}
                  target="_blank"
                >
                  <Github />
                </Link>
                <Link
                  href='mailto:l.vigil096@gmail.com'
                  className={`${styles.nav__socialLink} transition ease-in-out hover:-translate-y-1`}
                  target="_blank"
                >
                  <Mail />
                </Link>
                <Link
                  href='https://twitter.com/LizCodes'
                  className={`${styles.nav__socialLink} transition ease-in-out hover:-translate-y-1`}
                  target="_blank"
                >
                  <Twitter />
                </Link>
              </div>
              {/* <div className='header__socials'>
                <a
                  href='https://www.twitter.com/'
                  target='_blank'
                  className='header__social-link'
                >
                  <FaTwitter />
                </a>
  
                <a
                  href='https://www.dribbble.com/'
                  target='_blank'
                  className='header__social-link'
                >
                  <FaDribbble />
                </a>
  
                <a
                  href='https://www.behance.com/'
                  target='_blank'
                  className='header__social-link'
                >
                  <FaBehance />
                </a>
              </div> */}
            </div>
  
            <div className={`${styles.nav__deco} ${styles.deco__left}`}>
              <Image src={shapeOne} alt='' className={`${styles.shape} img`} />
            </div>
          </div>
  
          <div className='nav__btns'>
            {/* <div className='theme__toggler' onClick={toggleTheme}>
              {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
            </div> */}
  
            <div
              className={`${toggle ? styles.animateToggle : ''} ${styles.nav__toggle}`}
              onClick={toggleNav}
            >
              <span ></span>
              <span ></span>
            </div>
          </div>
        </nav>
      </header> 
    )
}