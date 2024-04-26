import { useReducer } from 'react'
import './Cart.scss'
import CartReducer from './CartReducer'
import sneakers from '../images/Sneakers.jpg'
import cap from '../images/cap.png'
import hoodie from '../images/hoodie.jpg'
import shirt from '../images/shirt.jpg'
import trouser from '../images/trousers.jpg'


const Cart = () => {
    const [cart, dispatch] = useReducer(CartReducer, {
        name: 'Nike company',
        items: [
            {
                name: 'Nike Air Jordan 1 Mid AJ1 Men Casual LifeStyle',
                shortname: 'Sneakers',
                id: Math.floor(Math.random() * 1000000),
                photo: sneakers,
                price: 110
            },
            {
                name: 'Nike Dri-FIT Rise Structured Snapback',
                shortname: 'Cap',
                id: Math.floor(Math.random() * 1000000),
                photo: cap,
                price: 20
            },
            {
                name: 'NIKE M Nsw Club Hoodie Fz Sweatshirtjacke Herren',
                shortname: 'Hoodie',
                id: Math.floor(Math.random() * 1000000),
                photo: hoodie,
                price: 120
            },
            {
                name: 'Nike Sportswear TEE FUTURA - Print T-shirt',
                shortname: 'T-shirt',
                id: Math.floor(Math.random() * 1000000),
                photo: shirt,
                price: 43
            },
            {
                name: 'Nike Dri-FIT Fleece Pants',
                shortname: 'Trouser',
                id: Math.floor(Math.random() * 1000000),
                photo: trouser,
                price: 75
            },
        ],
        cart: [],
        total: 0
    })

    const addCart = (cloth) => {
        if (!cart?.cart.find((item) => item.id === cloth.id)) {
            dispatch({ type: 'addCart', item: cloth })
        } else {
            alert('This item is already added!')
        }
    }
    const removeFromCart = (id, price) => {
        dispatch({ type: 'removeFromCart', id: id, price: price })
    }
    return (
        <div className='Cart'>
            <div className="container">
                <div className="Cart-block">
                    <div className="Cart-block-list">
                        <ul>
                            {
                                cart?.items.map((item) => (
                                    <li key={item.id} id={item.id}>
                                        <div className='item-image'>
                                            <img src={item.photo} alt="photo" />
                                        </div>
                                        <div className='item-info'>
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>Cost: <span>$    {item.price}</span> </p>
                                            </div>
                                            <button onClick={() => addCart(item)}>Add Cart</button>
                                        </div>
                                    </li>
                                ))
                            }
                            <li className='total-cart'>
                                <p> Total:${cart.total}</p>
                                <div>
                                    {
                                        cart?.cart.map((item) => (
                                            <span className='shortname'>
                                                {item.shortname}
                                                <button onClick={() => removeFromCart(item.id, item.price)}>x</button>
                                            </span>
                                        ))
                                    }
                                </div>

                            </li>
                        </ul>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;