import React from 'react';
import './ServiceStyles.css';
import img1 from '../assets/serv1.jpg'
import img2 from '../assets/serv2.jpg'
import img3 from '../assets/serv3.jpeg'
import img4 from '../assets/serv4.jpeg'
import img5 from '../assets/fibre1.jpg'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import ConstructionIcon from '@mui/icons-material/Construction';
import WifiIcon from '@mui/icons-material/Wifi';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HighQualityIcon from '@mui/icons-material/HighQuality';
function Service() {
    return (
        // <div className='footer'>
        //    <div className="footer-container">
            
            <div className="destination">
              <h1>Nos Services</h1>
              <br />
              {/* new design */}
              <div className="container">
                 <div className="row1">
                  <div className="service1">
                    <ConstructionIcon className='icon'/>
                     <h2>Construction</h2>
                     <p className='text1'>MANICH TRAVEAUX offre une large gamme de services, allant de la construction de bâtiments aux travaux de terrassement et de voirie. Leur équipe de professionnels peut fournir des services complets, de la conception initiale à la réalisation finale.</p>
                  </div>
                  <div className="service1">
                    <WifiIcon className='icon'/>
                     <h2>Installation Fibre/Optique</h2>
                     <p className='text1'>MANICH TRAVEAUX est spécialisée dans la conception et l'installation de la fibre optique, une technologie qui permet une transmission de données rapide et fiable. La société peut également fournir des solutions pour d'autres technologies de télécommunication telles que l'ADSL. </p>
                  </div>
                  <div className="service1">
                    <EngineeringIcon className='icon'/>
                     <h2>Solution & Maintenance</h2>
                     <p className='text1'>MANICH TRAVEAUX offre également des solutions pour les besoins spécifiques de leurs clients. Que ce soit pour des travaux de construction spécifiques ou pour la maintenance et la réparation de réseaux de télécommunications.</p>
                  </div>
                  <div className="service1">
                    <HighQualityIcon className='icon'/>
                     <h2>Vision & Qualité</h2>
                     <p className='text1'>La vision de MANICH TRAVEAUX est de fournir des prestations de qualité supérieure tout en visant constamment la satisfaction du client. Les valeurs de l'entreprise incluent le savoir-faire, la qualité, l'engagement, la disponibilité, la responsabilité,
                      </p>
                  </div>
                 
                 </div>
              </div>

              <p className='service'>
                 MANICH TRAVEAUX a été fondée en 16/06/2021 avec l'ambition de fournir des prestations 
                     de qualité supérieure dans le domaine des réseaux de télécommunications et des travaux de génie civil. 
                      Depuis sa création, l'entreprise a connu une croissance rapide grâce à sa capacité à fournir des solutions 
                     sur mesure pour répondre aux besoins spécifiques de chaque client .

               </p>

           <div className="fibre-image">
                    {/* <img src={img5} alt="img" /> */}
                  </div>

            <div className="first-des">
                 <div className="des-text">
                  <p>
                   MANICH TRAVEAUX est spécialisée dans la conception et l'installation de la fibre optique, une technologie qui permet 
                    une transmission de données rapide et fiable. La société peut également fournir des solutions pour d'autres technologies
                    de télécommunication telles que l'ADSL. MANICH TRAVEAUX travaille avec des équipements de pointe et du personnel qualifié 
                    pour garantir des installations de qualité supérieure.
                  </p>
                </div>
                <div className="image">
                   <img alt="img"  src={img3}  />
                   {/* <img alt="img"  src={img4}  /> */}
                </div>
          </div>
           
          
          <hr className="space" />


 </div>
           
   
      
      )
}

export default Service