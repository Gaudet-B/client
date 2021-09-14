import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'


const Details = () => {

    const {id} = useParams()
    const history = useHistory()
    const [productState, setProductState] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProductState(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="d-flex align-items-center" style={{ height: "100vh", width: "60%", margin: "auto" }}>
            {
                (productState) ?
                <div className="d-flex flex-column align-items-center text-light" >
                    <h1>{ productState.title }</h1>
                    <h5>Price: { productState.price }</h5>
                    <h5>Description: { productState.description }</h5>
                </div> : <h1 className="text-light">Loading...</h1>
            }
        </div>
    )
}

export default Details
