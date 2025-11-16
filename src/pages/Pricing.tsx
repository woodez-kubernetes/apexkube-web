import { FC } from 'react'
import './Pricing.css'

const Pricing: FC = () => {
  return (
    <div className="pricing-page">
      <div className="content-container">
        <div className="content-card">
          <div className="header-section">
            <h1 className="page-title">AI Enabled Consulting Pricing</h1>
            <p className="page-subtitle">
              Choose the perfect AI transformation package for your business
            </p>
          </div>
          
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="tier-header">Subscription Level</th>
                  <th className="price-header">Annual Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tier-row bronze">
                  <td className="tier-name">
                    <div className="tier-info">
                      <span className="tier-title">Bronze</span>
                      <span className="tier-description">Essential AI Integration</span>
                    </div>
                  </td>
                  <td className="tier-price">$10,000</td>
                </tr>
                <tr className="tier-row silver">
                  <td className="tier-name">
                    <div className="tier-info">
                      <span className="tier-title">Silver</span>
                      <span className="tier-description">Advanced AI Solutions</span>
                    </div>
                  </td>
                  <td className="tier-price">$20,000</td>
                </tr>
                <tr className="tier-row gold popular">
                  <td className="tier-name">
                    <div className="tier-info">
                      <span className="tier-title">Gold</span>
                      <span className="tier-description">Premium AI Transformation</span>
                      <span className="popular-badge">Most Popular</span>
                    </div>
                  </td>
                  <td className="tier-price">$40,000</td>
                </tr>
                <tr className="tier-row fools-gold">
                  <td className="tier-name">
                    <div className="tier-info">
                      <span className="tier-title">Fools Gold</span>
                      <span className="tier-description">Ultimate AI Ecosystem</span>
                    </div>
                  </td>
                  <td className="tier-price">$500,000</td>
                </tr>
              </tbody>
            </table>
            
            <div className="guarantee-disclaimer">
              <p>
                <em>*If the owner of ApexKube doubles the money you pay using the stock market or at the track, your subscription is free for the entire year.</em>
              </p>
            </div>
          </div>
          
          <div className="cta-section">
            <button className="cta-button">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing