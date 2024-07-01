import aboutImg from '../../assets/circle5.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import styles from './about.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <section className={styles.about} id='about'>
    <div className={styles.about__wrapper}>
    <h2 className='section__title uppercase'>
          About<span className='dot'>.</span>
          <p className='section__subtitle text-cs'>
              Get to Know Me
          </p>
      </h2>
      <div className={`${styles.about__container} container`}>
      
        <div className={`${styles.about__imgWrapper}`}>
          <div className={styles.about__banner}>
            <Image src={aboutImg} alt='' className={`${styles.about__profile}`} />
          </div>

          <Image src={shapeOne} alt='' className={`shape ${styles.shape__1}`} />
          <Image src={shapeTwo} alt='' className={`shape ${styles.shape__2}`} />
          <Image src={shapeTwo} alt='' className={`shape ${styles.shape__3}`} />
        </div>

        <div className={styles.about__text}>
        <p> 
          Hi! I&apos;m Lizmery and I enjoy building various aesthetic and user-friendly digital experiences. 
          My interest in web development began back in the day when MySpace was still around and I would 
          spend hours customizing my profile only to change up the design again, days later.
        </p>
                  <br />
                  <p>
                  A few years ago, I rediscovered my love for web development and since then, 
                  I have created projects using Next.js, Typescript, TailwindCSS, MongoDB, and much more! 
                  </p>
                  <br />
                  <p>
                  When I am not coding, I enjoy watching anime, reading, and spending time with my four-legged son, Yuki.
                  </p>
                
        </div>

        
      </div>
      </div>

      <div className='section__deco deco__left'>
        <Image src={shapeOne} alt='' className='shape' />
      </div>
    

    <div className='section__bg-wrapper'>
      <span className='bg__title dark'>About Me</span>
    </div>
  </section>
  )
}