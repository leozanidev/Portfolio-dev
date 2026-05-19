import styles from './Contact.module.css'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h2>Vamos conversar</h2>
        <p className={styles.contactTagline}>
          Se meu perfil te interessou, entre em contato!
        </p>
      </div>
      <div className={styles.contacts}>
        <div className={styles.mail}>
          <a href="mailto:leonardozanidev@gmail.com">
            <FaEnvelope /> leonardozanidev@gmail.com
          </a>
          <a
            href="\CV_Leonardo_Zani_Final.pdf"
            download={true}
          >
            Baixe meu currículo.
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
