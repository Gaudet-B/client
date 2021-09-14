import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Display = () => {

    const [products, setProducts] = useState([])
    const [state, setState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [state])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setState(!state))
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex flex-column text-center" style={{ width: "60%", margin: "auto" }}>
            <h1 className="text-light">All Products:</h1>
            <ul className="me-3" style={{ listStyle: "none" }}>
                {
                    products.map((product, idx) => {
                        return(
                            <div className="my-4">
                                <li key={idx}>
                                    <Link to={`/products/${product._id}`} className="link-light fs-4">
                                        {product.title}
                                    </Link>
                                </li>
                                <button onClick={() => deleteHandler(product._id)} className="btn btn-sm btn-outline-danger mt-2 text-light" style={{ width: "90px" }} >Delete</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Display
