import React from "react"
import './card.css'
const Card=({
    title,
    image,
    description
})=>{
    return(
        <>
        <div className='cardexamen'>
      
            <h2>{title}</h2>
            <figure>
                <img src={image}/>
                
            </figure>
            <p>{description}</p>
            
        </div>
        </>

    )
}
export default Card