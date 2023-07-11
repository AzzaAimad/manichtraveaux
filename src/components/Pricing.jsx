import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'
function Pricing() {
  return (
    <div className='pricing'>
        <div className="card-container">
               <div className="card-bar">
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className="btc">1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quarters</p>
                <Link to='/contact' className='btn'>Apply</Link>
                </div>        

                  <div className="card-bar">
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className="btc">1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quarters</p>
                <Link to='/contact' className='btn'>Apply</Link>
                </div>   

                  <div className="card-bar">
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className="btc">1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quarters</p>
                <Link to='/contact' className='btn'>Apply</Link>
                </div>   

                  <div className="card-bar">
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className="btc">1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quarters</p>
                <Link to='/contact' className='btn'>Apply</Link>
                </div>    

                 
     
        </div>
        

    </div>
  )
}

export default Pricing