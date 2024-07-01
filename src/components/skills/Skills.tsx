import { skills } from '@/constants/Data'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import Link from 'next/link';
import styles from './skills.module.css'
import Image from 'next/image';

export default function Skills() {
  return (
    <section className={`${styles.skills} section`} id='skills'>
        <h2 className='section__title uppercase'>
            Skills<span className={` ${styles.dot}`}>.</span>
            <p className='section__subtitle text-cs'>
         <span>Tech Skillset</span>
      </p>
        </h2>

        <div className={`container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-[600px] lg:w-[900px] pt-10 ${styles.skills__container}`}>
        {skills.map((item) => {
          return (
            <p key={item.id} className={`${styles.skills__item} text-center`}>{item.name}</p>
        )})}
        </div>



      <div className='section__deco deco__right'>
        <Image src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>My Skills</span>
      </div>
    </section>
  )
}