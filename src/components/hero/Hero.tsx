import heroImg from '../../assets/hero.svg'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import Link from 'next/link'
import styles from './hero.module.css'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.hero__wrapper}>
            <div className={`${styles.hero__container} container`}>
              <p className={`${styles.hero__subtitle} text-cs`}>
                    Hello, <span>My Name is</span>
              </p>

              <h1 className={`${styles.hero__title} text-cs`}>
                  <span>Lizmery</span> Vigil
              </h1>

              <p className={styles.hero__job}>
                <b>Software Developer</b>
              </p>

              <div className={`${styles.hero__imgWrapper}`}>
                <div className={styles.hero__banner}>
                  <Image src={heroImg} alt='' className={`${styles.hero__profile} img`} />
                </div>



                <Image src={shapeOne} alt='' className={`shape ${styles.shape1}`} />
                <Image src={shapeTwo} alt='' className={`shape ${styles.shape2}`} />
                <Image src={shapeTwo} alt='' className={`shape ${styles.shape3}`} />
              </div>

              <p className={styles.hero__text}>
              I am a software developer with a background in Psychology and a passion for building aesthetic and user friendly applications.
              </p>

              <div className={styles.hero__btns}>
                <a href='/resume.pdf' className='btn text-cs' target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>

                <Link
                  className={`${styles.hero__link} text-cs link`}
                  href='/#projects'
                >
                  View Projects <ArrowRight className={styles.hero__arrow} />
                </Link>
              </div>
            </div>

            <div className='section__deco deco__left'>
              <Image src={shapeOne} alt='' className='shape' />
            </div>
      </div>

      <div className={`section__bgWrapper ${styles.heroBgWrapper}`}>
        <span className='bg__title dark'>Software Developer</span>
      </div>


    </section> 
  )
}