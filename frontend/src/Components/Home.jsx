import React, { useState } from 'react'
import './Home.css'
import Contador from './Contador';

export default function Home({stock, setStock}) {

    const [quantity, setQuantity] = useState(1);
    const greeting = 'Tocame';


    return (
        <section>
            <div className="container">
                <h2>Bienvenido al home de prueba de esta app amigos!</h2>
                <h3 className='box-P text-center'>Stock actual: <span>{stock}</span></h3>

                <Contador quantity={quantity} setQuantity={setQuantity} stock={stock} setStock={setStock}/>
                
            </div>
        </section>
    )
}
