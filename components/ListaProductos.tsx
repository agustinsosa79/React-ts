import {useEffect, useState} from 'react'

type Productos = {
    id: string
    title: string
    price: number
    image: string
}

export const ListaProductos = () => {
    const [productos, setProductos] = useState<Productos[]>([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json())
        .then(data => {
            setProductos(data)
        })
    }, [])


        return (
            <div>
                {productos.map(prod => (
                    <>
                    <h5>{prod.id}</h5>
                    <h1>{prod.title}</h1>
                    <img src={`${prod.image}`} alt={`${prod.title}`} />
                    <p>${prod.price}</p>
                    </>
                ))}

            </div>
        )
    }