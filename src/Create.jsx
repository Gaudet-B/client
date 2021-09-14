import { useState } from 'react'
import axios from 'axios'
import Display from './Display'


const Create = () => {

    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = e => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products/new", formState)
            .then(res => {
                setFormState({
                    title: "",
                    price: 0,
                    description: ""
                })
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex flex-column text-center my-4" style={{ width: "60%", margin: "auto", borderBottom: "1px solid whitesmoke" }}>
                <h1 className="my-3 text-light display-3">Product Manager</h1>
                <form className="form mb-4" onSubmit={ submitHandler }>
                    <div className="d-flex flex-row bg-light my-2 justify-content-between p-2 align-items-center rounded">
                        <label htmlFor="title">Title</label>
                        <input onChange={ changeHandler } name="title" type="text" className="form-control" style={{ maxWidth: "250px" }} />
                    </div>
                    <div className="d-flex flex-row bg-light my-2 justify-content-between p-2 align-items-center rounded">
                        <label htmlFor="price">Price</label>
                        <input onChange={ changeHandler } name="price" type="text" className="form-control" style={{ maxWidth: "250px" }} />
                    </div>
                    <div className="d-flex flex-row bg-light my-2 justify-content-between p-2 align-items-center rounded">
                        <label htmlFor="description">Description</label>
                        <input onChange={ changeHandler } name="description" type="text" className="form-control" style={{ maxWidth: "250px" }} />
                    </div>
                    <button className="btn btn-outline-light" type="submit" style={{ width: "180px" }} >Create</button>
                </form>
            </div>
            <Display />
        </div>
    )
}

export default Create
