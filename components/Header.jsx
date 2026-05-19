import styles from './Header.module.css'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const Header = () => {
  const nome = 'Leonardo Zani'
  const nomeArray = nome.split('')

  return (
    <header className={styles.headerSection}>
      <div className={styles.presentation}>
        <h1>
          {nomeArray.map((letter, i) => {
            if (letter !== ' ') {
              return (
                <span
                  className={styles.mainTitle}
                  style={{ animationDelay: i * 0.03 + 's' }}
                >
                  {letter}
                </span>
              )
            } else {
              return (
                <span
                  className={styles.mainTitle}
                  style={{ animationDelay: i * 0.03 + 's' }}
                >
                  {'\u00A0'}
                </span>
              )
            }
          })}
        </h1>
        <p
          className={styles.presentationTagline}
          style={{ animationDelay: 1 + 's' }}
        >
          Desenvolvedor Frontend em formação, focado em React e TypeScript
        </p>
      </div>
      <div className={styles.professionalNetwork}>
        <div className={styles.gitBox}>
          <a
            href="https://github.com/leozanidev?tab=repositories"
            target="_blank"
          >
            <SiGithub className={styles.iconsPersonalization} />
          </a>
        </div>
        <div className={styles.linkedinBox}>
          <a href="https://www.linkedin.com/in/leozani-dev/" target="_blank">
            <FaLinkedin className={styles.iconsPersonalization} />
          </a>
        </div>
      </div>
      <div className={styles.navigationSection}>
        <div className={styles.goToSection}>
          <a>Sobre</a>
          <a>Skills</a>
          <a>Projetos</a>
          <a>Contato</a>
        </div>
      </div>
    </header>
  )
}

export default Header
