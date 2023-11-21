import React from 'react'
import './portiflio.css'
import img1 from "../../assets/img1.png"
import img4 from '../../assets/img4.png'
import img5 from "../../assets/img5 .png"
import todoApp from "../../assets/todoApp.png"
import dashboard from "../../assets/car-dashboard.png"
import rent from "../../assets/car-rent.png"
import restaurant  from "../../assets/reasturant-ui.png"

const Portiflio = () => {

  const data=[
    {
      id:1,
      image:img1,
      title:'e-commerce website',
      github:'https://github.com/AndargWorku',
      demo:'https://furncomm.vercel.app/home' 
    },

    {
      id:4,
      image:img4,
      title:'e-commerce website only frontend',
      github:'https://github.com/AndargWorku',
      demo:'https://furncomm.vercel.app/home' 
    },
    {
      id:5,
      image:img5,
      title:'e-commerce with dashboard',
      github:'https://github.com/AndargWorku',
      demo:'https://wa-livid.vercel.app/Home'
    },
    {
      id:6,
      image:todoApp,
      title:'todo list app',
      github:'https://github.com/AndargWorku',
      demo:'https://andargworku.github.io/todoApp/'

    },
    {
      id:7,
      image:dashboard,
      title:'car rent dashboard',
      github:'https://github.com/AndargWorku/rent-dashboard.git',
      demo:'https://rent-dashboard.vercel.app/dashboard'

    },
    {
      id:8,
      image:rent,
      title:'car rent responsive ',
      github:'https://github.com/AndargWorku/cars.git',
      demo:'https://cars-three-psi.vercel.app/home'

    },
    {
      id:9,
      image:restaurant,
      title:'restaurant website',
      github:'https://github.com/AndargWorku/resturant-food.git',
      demo:'https://resturant-food.vercel.app/'

    },
    
  ]
  return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio_container '>
          {
            data.map(({id,image,title,github,demo})=>{
              return(
                <article key={id}className="portfolio_item">
            <div className="portfolio_item-image">
           <img src={image} att="imag1"/>
            </div>
            <h3> {title}</h3>
            <div className="portfolio_item-cta">
            <a href ={github} className=" btn" target="_blank">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>

              )
            })
          }
         </div>

      </section>
    
  )
}

export default Portiflio
