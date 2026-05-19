import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
