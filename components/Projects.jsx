import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      name: 'To Do List Simples',
      description:
        'Aplicação de gerenciamento de tarefas com criação, edição, exclusão, busca com filtro e persistência via localStorage. Desenvolvida com HTML, CSS e JavaScript puro.',
      image: '/images/todolist.png',
      stack: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
      ],
      link: 'https://github.com/leozanidev/todo-list',
    },
    {
      name: 'Habit Tracker',
      description:
        'Aplicação para acompanhamento de hábitos diários com visualização em gráfico, sistema de streak e custom hooks. Desenvolvida com React, CSS Modules e JSON Server.',
      image: '/images/habittracker.png',
      stack: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
        'devicon-react-original colored',
      ],
      link: 'https://github.com/leozanidev/habit-tracker',
    },
    {
      name: 'Job Board',
      description:
        'Aplicação que consome uma API real de vagas de emprego com busca por filtros e navegação entre páginas. Desenvolvida com React, TypeScript e Tailwind CSS.',
      image: '/images/jobboard.png',
      stack: [
        'devicon-html5-plain colored',
        'devicon-css3-plain colored',
        'devicon-javascript-plain colored',
        'devicon-react-original colored',
        'devicon-typescript-plain colored',
      ],
      link: 'https://github.com/leozanidev/job-board',
    },
  ]
  return (
    <section className={styles.projectsSection}>
      <h2>Projetos</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, i) => {
          if (i % 2 === 0) {
            return (
              <div key={project.name} className={styles.project}>
                <div className={styles.imageContainer}>
                  <img src={project.image} alt="Print do projeto" />
                </div>
                <div className={styles.textContainer}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>
                    Projeto completo: &nbsp;
                    <a href={project.link} target="_blank">
                      {project.link}
                    </a>
                  </p>
                  <div className={styles.stacks}>
                    {project.stack.map((stack, i) => (
                      <i key={i} className={stack}></i>
                    ))}
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div
                key={project.name}
                className={`${styles.project} ${styles.oddProject}`}
              >
                <div
                  className={`${styles.imageContainer} ${styles.oddProjectImageContainer}`}
                >
                  <img src={project.image} alt="Print do projeto" />
                </div>
                <div className={styles.textContainer}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>
                    Projeto completo: &nbsp;
                    <a href={project.link} target="_blank">
                      {project.link}
                    </a>
                  </p>
                  <div className={styles.stacks}>
                    {project.stack.map((stack) => (
                      <i className={stack}></i>
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Projects
