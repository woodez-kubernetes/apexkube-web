import { useState } from 'react'
import Navigation from './components/Navigation'
import About from './pages/About'
import Pricing from './pages/Pricing'
import './App.css'

type Page = 'about' | 'pricing'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('about')

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'pricing':
        return <Pricing />
      default:
        return <About />
    }
  }

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App