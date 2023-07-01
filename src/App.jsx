import NewsInfo from './components/newsInfo'
import logo from './assets/githublogo.png'

function App() {
  

  return (
    <main>
      <div className='topTitle'>News Tracker</div>
      <NewsInfo />
      <div className='bottomCredit'><a href="https://github.com/swatson9008?tab=repositories"><img src={logo} alt="github" /></a></div>
    </main>
  )
}

export default App
