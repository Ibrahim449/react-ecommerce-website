import React from 'react'
import './customFurniture.css';
import { FaGgCircle, FaDiceD20 } from 'react-icons/fa'
import { MdOutlineHistoryEdu } from "react-icons/md";

export default function CustomFurniture() {
  return (
    <div>
      <section className="furniture">
          <div className="customFur">
          <div className="header1">
              <h3>Custom Furniture <br /> Built Only For You</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero.</p>
          </div>

          <div className="cards">
              <div className="content">
                  <div className="logo"><FaGgCircle /></div>
                  <h4>Mission</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
              </div>

              <div className="content">
                  <div className="logo"> <FaDiceD20 /> </div>
                  <h4>Vison</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
              </div>

              <div className="content">
                  <div className="logo"><MdOutlineHistoryEdu /></div>
                  <h4>History</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
              </div>
          </div>
          </div>
      </section>
    </div>
  )
}
