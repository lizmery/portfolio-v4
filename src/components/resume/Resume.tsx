import { resumeItems } from '@/constants/Data'
import { ResumeCard } from './ResumeCard'
import shapeOne from '../../assets/shape-1.png'
import styles from './resume.module.css'
import Image from 'next/image'

export default function Resume() {
  return (
    <section className={`${styles.resume} section`} id='resume'>
      <h2 className='section__title text-cs'>Resume<span className='dot'>.</span></h2>
      <p className='section__subtitle'>
        History
      </p>

      <div className={`${styles.resume__container} container grid`}>
        <div className={styles.resume__group}>
          <h3 className={styles.resume__heading}>Experience</h3>

          <div className={styles.resume__items}>
            {resumeItems.map(item => {
              if (item.category === 'experience') {
                return (
                  <ResumeCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    date={item.date}
                    description={item.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className={styles.resume__group}>
          <h3 className={styles.resume__heading}>Education</h3>

          <div className={styles.resume__items}>
            {resumeItems.map(item => {
              if (item.category === 'education') {
                return (
                  <ResumeCard
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    date={item.date}
                    description={item.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className='section__deco deco__left'>
        <Image src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>My Resume</span>
      </div>
    </section>
  )
}