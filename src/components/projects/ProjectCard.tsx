import shapeTwo from '../../assets/shape-2.png'
import Link from 'next/link'
import Image from 'next/image'
import styles from './projects.module.css'
import { ArrowRight, Github, ExternalLink,  } from 'lucide-react'

type ProjectCardProps = {
    project: {
        id: number,
        img: any,
        subtitle: string,
        title: string,
        sourceLink: string,
        demoLink: string,
        description: string,
    }
}

export function ProjectCard({
project
} : ProjectCardProps) {
  return (
        <div className='card card-one'>
            <div className={styles.card__imgWrapper}>
              <Image src={project.img} alt='' className={styles.card__img} />
            </div>

            <span className={`${styles.card__subtitle} text-cs`}>{project.subtitle}</span>
            <h3 className={styles.card__title}>{project.title}</h3>
            <p className={styles.card__description}>{project.description}</p>

            <div className='flex flex-row w-full justify-left gap-4'>
              {project.sourceLink !== '' &&
              <Link
              className='link'
              href={project.sourceLink}
              target="_blank"
            >
              
              <Github className='link__icon transition ease-in-out hover:-translate-y-1' />
            </Link>
              }
            
            <Link
              className='link'
              href={project.demoLink}
              target="_blank"
            >
             
              <ExternalLink className='link__icon transition ease-in-out hover:-translate-y-1' />
            </Link>
            </div>



            <Image src={shapeTwo} alt='' className={`shape c__shape ${styles.cardShape}`} /> 
</div>
  )
}
