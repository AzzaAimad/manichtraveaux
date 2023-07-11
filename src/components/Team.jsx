import React from 'react'
import './TeamStyles.css'
import img1 from '../assets/user1.jpg'
import img2 from '../assets/user2.jpg'
import img3 from '../assets/user3.jpg'
import img4 from '../assets/user4.jpg'
function Team() {
  return (
    <section class="swiper mySwiper">
        <div className='title'>
            <p>Nos Moyens Humains</p>
        </div>
    <div class="swiper-wrapper">

      <div class="card swiper-slide">
        <div class="card__image">
          <img src={img1} alt="card image"/>
        </div>

        <div class="card__content">
          <span class="card__title">Chef De Chantier</span>
          <span class="card__name">Hamza Boussalem </span>
          <p class="card__text">Mr. Boussalem est responsable de la qualité des travaux effectués, notamment aux domaines de génie civil et la fibre optique, de la tenue des délais et du respect du budget. Il contrôle toutes les étapes du chantier, depuis l'étude du dossier technique jusqu'à la réception des travaux.</p>
          <button class="card__btn">View More</button>
        </div>
      </div>

      <div class="card swiper-slide">
        <div class="card__image">
          <img src={img2} alt="card image"/>
        </div>

        <div class="card__content">
          <span class="card__title">Directeur Technique</span>
          <span class="card__name">Mohcine Rachad</span>
          <p class="card__text">Mr. RACHAD s’occupe d'encadrer et de diriger toute l'activité technique au sein de la société. Travaillant directement en collaboration avec la direction générale, il gère en réalité les ressources et les moyens techniques. Dans certains cas, il peut être conduit à analyser les besoins fonctionnels des clients.</p>
          <button class="card__btn">View More</button>
        </div>
      </div>

      <div class="card swiper-slide">
        <div class="card__image">
          <img src={img3} alt="card image"/>
        </div>

        <div class="card__content">
        
          <span class="card__title">Conducteur De Travaux</span>
          <span class="card__name">Ayoub Alallali</span>
          <p class="card__text">Son travail est sur le terrain, il contrôle quotidiennement l'avancement et la qualité des travaux menés. Il veille au respect des délais ainsi qu'à l'application des règles de sécurité, et il transmet des rapports au conducteur de travaux. À partir des ordres, des plans et des croquis transmis par ce dernier.</p>
          <button class="card__btn">View More</button>
        </div>
      </div>

     

    </div>
  </section>

  )
}

export default Team