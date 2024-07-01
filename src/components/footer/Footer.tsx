import styles from './footer.module.css'
import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__socials}>
            <Link
                href='https://github.com/lizmery'
                className={`${styles.footer__socialLink} transition ease-in-out hover:-translate-y-1`}
                target="_blank"
            >
                <Github />
            </Link>
            <Link
                href='mailto:l.vigil096@gmail.com'
                className={`${styles.footer__socialLink} transition ease-in-out hover:-translate-y-1`}
                target="_blank"
            >
                <Mail />
            </Link>
            <Link
                href='https://twitter.com/LizCodes'
                className={`${styles.footer__socialLink} transition ease-in-out hover:-translate-y-1`}
                target="_blank"
            >
                <Twitter />
            </Link>
        </div>

        <p className={`${styles.footer__copyright} text-cs`}>
            Designed & Built by <br />
            <span> Lizmery Vigil</span>
            <br /> &copy; 2024
        </p>
      </div>
    </footer>
  )
}
