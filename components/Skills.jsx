import styles from './Skills.module.css'

const Skills = () => {
  const techs = [
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'JAVASCRIPT', icon: 'devicon-javascript-plain' },
    { name: 'TYPESCRIPT', icon: 'devicon-typescript-plain' },
    { name: 'REACT', icon: 'devicon-react-original' },
    { name: 'TAILWIND', icon: 'devicon-tailwindcss-original' },
    { name: 'FIGMA', icon: 'devicon-figma-plain' },
    { name: 'GIT', icon: 'devicon-git-plain' },
  ]
  return (
    <section className={styles.skillsSection}>
      <h2>Tecnologias</h2>
      <div className={styles.gridSection}>
        {techs.map((tech) => {
          return (
            <div
              className={styles.skill}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector('i')
                icon.classList.add('colored')
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector('i')
                icon.classList.remove('colored')
              }}
            >
              <i className={tech.icon}></i>
              <p>{tech.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
