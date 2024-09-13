import Header from './components/Header/Header'
import About from './components/Main/About'
import Home from './components/Main/Home'
import Projects from './components/Main/Projects'
import Skills from './components/Main/Skills'
import Contact from './components/Main/Contact'

// Imports styles
import './style/style.css'

// Styles: small screens
import './style/s-header.css'
import './style/s-home.css'
import './style/s-about.css'
import './style/s-skills.css'
import './style/s-projects.css'
import './style/s-contact.css'

// Styles: medium screens
import './style/m-about.css'
import './style/m-projects.css'

// Styles: large screens
import './style/l-header.css'
import './style/l-home.css'
import './style/l-about.css'
import './style/l-skills.css'
import './style/l-projects.css'
import './style/l-contact.css'

// Styles: dark mode
import './style/dark-mode.css'

function App() {

  return (
    <div className='content'>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
