import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.section}>
        <h2>Sobre mim</h2>
        <div className={styles.aboutText}>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas, com uma base
            construída ao longo de dois anos em Ciência da Computação na UFES e
            reforçada por projetos práticos desenvolvidos por conta própria. Ao
            longo dessa jornada, fui além do ambiente acadêmico — aprendi HTML,
            CSS, JavaScript, TypeScript e React de forma autônoma, e coloquei
            esse conhecimento em prática em projetos reais que estão no meu
            portfólio. Estou em busca da minha primeira oportunidade no mercado
            de tecnologia. Não chego com todas as respostas, mas chego com base,
            iniciativa e muita vontade de crescer dentro de um time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
