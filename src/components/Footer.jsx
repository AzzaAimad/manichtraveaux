import React from 'react'
import './FooterStyles.css'
import { FaFacebook ,FaLinkedin,FaMailBulk,FaSearchLocation,FaTwitter,FaPhone} from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
       <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
            <div>
                <p>123 Acem st </p>
                <h4>Housten ,tx</h4>
               </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>+212-677740344</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>azza.aimad@gmail.com</h4>
            </div>
        </div>

        <div className="right">
            <h4>about the company</h4>
            <p>MANICH TRAVEAUX a vu le jour avec une énergie débordante et une passion véritable pour la conception et la mise en place de réseaux de télécommunications,
                qu'il s'agisse de l'ADSL ou de la fibre optique, ainsi que pour la réalisation de travaux de génie civil de tous types.
Nous sommes fiers de compter sur du personnel qualifié et motivé, ainsi que sur des matériaux et équipements de premier choix pour garantir la qualité de nos prestations.
Que votre projet soit grand ou petit, MANICH TRAVEAUX est à vos côtés pour identifier vos besoins et vous proposer une installation sur mesure répondant à vos attentes.
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                </div>
            </div>
       </div>

    </div>
  )
}

export default Footer