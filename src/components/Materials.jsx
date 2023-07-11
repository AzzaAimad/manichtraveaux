import React from 'react'
import './MaterialsStyles.css'
import img1 from '../assets/serv2.jpg'
import img2 from '../assets/out2.jpg'
import img3 from '../assets/out3.jpg'
import img4 from '../assets/out4.jpg'

function Materials() {
  return (
    <div className='destination'>
        <h1>Nos  Appariels</h1>
        <p></p>
        
        <div className='row-list '>
        <div className="row">
            <div className="campus-col">
                <img src={img4} alt="" />
                <div className="layer">
                    <h3>03 Marteaux piqueurs dégageurs 65A-2400</h3>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="campus-col">
                <img src={img1} alt="" />
                <div className="layer">
                    <h3>05 Aiguilles fibres Ø 11mm lg 300m, 200m, 180m, 165m, 150m</h3>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="campus-col">
                <img src={img3} alt="" />
                <div className="layer">
                    <h3>Des différents types outillages électroportatifs</h3>
                </div>
            </div>
         </div>
         <div className="row">
            <div className="campus-col">
                <img src={img4} alt="" />
                <div className="layer">
                    <h3>04 Groupes électrogènes 6 kVA 230 V</h3>
                </div>
            </div>
         </div>
        </div>
         
         

        </div>
  )
}

export default Materials