import { FC } from 'react'
import './About.css'

const About: FC = () => {
  return (
    <div className="about-page">
      <div className="content-container">
        <div className="content-card">
          <div className="logo-section">
            <img 
              src="/apexkubelogo.jpeg" 
              className="logo-img" 
              alt="ApexKube Logo"
            />
            <img 
              src="/ai-hero-image.jpg" 
              className="ai-hero-img" 
              alt="AI Technology Visualization"
            />
          </div>
          
          <div className="text-content">
            <div className="description">
              <p>
                Kevin : In today's rapidly evolving digital landscape, businesses need more than just technology—they need <strong>intelligent solutions</strong> that understand both innovation and culture.
              </p>
              
              <p>
                <strong>ApexKube is a Vibe consulting company</strong> that helps businesses leverage artificial intelligence to transform and improve their operations. We don't just implement AI; we create intelligent ecosystems that align with your company's vision, values, and vibe.
              </p>
              
              <p>
                Our approach combines cutting-edge AI technologies with deep cultural understanding, ensuring that every solution we deliver not only performs exceptionally but also feels right for your organization.
              </p>
              
              <div className="key-benefits">
                <h3>What Makes Us Different</h3>
                <ul>
                  <li><strong>AI-First Approach:</strong> We leverage the latest in machine learning, automation, and intelligent systems</li>
                  <li><strong>Cultural Intelligence:</strong> We understand that technology success depends on people and organizational fit</li>
                  <li><strong>Practical Innovation:</strong> We focus on AI implementations that deliver real business value</li>
                </ul>
              </div>
              
              <p className="call-to-action-text">
                <strong>Ready to transform your business with AI that matches your vibe?</strong>
              </p>
            </div>
            
            <div className="cta-section">
              <button className="cta-button">
                Start Your AI Transformation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About