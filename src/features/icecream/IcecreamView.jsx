import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {

    const [value, setValue] = useState(1)
    const noOfIcecreams = useSelector((state) => state.icecream.noOfIcecreams)
    const dispatch = useDispatch()
    
    return (
        <div>
            <h2>Number of Icecreams - { noOfIcecreams }</h2>
            <button onClick={ () => dispatch(ordered()) }>Order Icecream</button>
            <input type="number" value = {value} onChange={ e => setValue(parseInt(e.target.value))} />
            <button onClick={ () => dispatch(restocked(value)) }>Restock Icecream</button>
        </div>
    )
}

