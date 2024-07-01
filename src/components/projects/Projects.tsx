import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import styles from './projects.module.css'
import { projects } from '@/constants/Data'
import Image from 'next/image'
import { ProjectCard } from './ProjectCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Projects() {
  return (
    <section className={`${styles.projects} section`} id='projects'>
      <h2 className='section__title uppercase'>
        Featured Projects<span className='dot'>.</span>
    </h2>
      <h4 className='section__subtitle'>
      {`What I've Created`}
      </h4>

      <Carousel
      opts={{
        align: "start",
      }}
      className={`${styles.projects__container} container`}
    >
        <CarouselContent>
        {projects.map((project) => {
          return (
            // <SwiperSlide className={`${styles.projects__item} card card-one`} key={project.id}>
            <CarouselItem key={project.id} className={`${styles.projects__item} lg:basis-1/2 xl:basis-1/3`}>
              <ProjectCard  project={project} />
            {/* // </SwiperSlide> */}
            </CarouselItem>
          )
        })}
        </CarouselContent>
        <div className={styles.pagination}>
        <CarouselPrevious  className={`${styles.bullet}`}/>
      <CarouselNext className={`${styles.bullet}`} />
        </div>

        </Carousel>
      {/* </Swiper> */}

      <div className='section__deco deco__right'>
        <Image src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Projects</span>
      </div>
    </section>
  )
}