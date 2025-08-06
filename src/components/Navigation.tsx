import { FC } from 'react'
import './Navigation.css'

type Page = 'about' | 'pricing'

interface NavigationProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

const Navigation: FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => onPageChange('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'pricing' ? 'active' : ''}`}
              onClick={() => onPageChange('pricing')}
            >
              Pricing
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation