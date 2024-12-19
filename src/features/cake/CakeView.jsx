import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked  } from './cakeSlice'

export const CakeView = () => {

    const noOfCakes = useSelector((state) => state.cake.noOfCakes)//accepts a function ( called selector function ) as a parameter and the function takes stst as argument)
    //useSelector hook returns whatever the value returns by the selector function

    const dispatch = useDispatch()//returns a reference to the dispatch function of the redux store
    
    return (
        <div>
            <h2>Number of Cakes - { noOfCakes }</h2>
            <button onClick={ () => dispatch(ordered())}>Order Cake</button>
            <button onClick={ () => dispatch(restocked(5))}>Restock Cake</button>
        </div>
    )
}


