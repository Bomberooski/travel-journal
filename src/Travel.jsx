import React from "react"


export default function Travel(props) {



    return (
        <section className="card">
            <img src= {props.item.coverImage}  className="location-image" />
            <div>
               <p className="card-area"><span><img src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png" className="card-locationping"></img>{props.item.area}</span></p>
               <h2 className="card-location">{props.item.title}</h2>
               <p className="card-date">{props.item.date}</p>
               <p className="card-descrpition">{props.item.description}</p>
            </div>
        </section>
        
    )
}