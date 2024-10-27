import React from 'react'

const page = () => {
    const cartItems = [
        {
            id: '1',
            name: 'Item Name 1',
            price: 'Item Price 1',
            quantity: 'Item Quantity 1',
            total: 'Item Total 1'
        },
        {
            id: '2',
            name: 'Item Name 2',
            price: 'Item Price 2',
            quantity: 'Item Quantity 2',
            total: 'Item Total 2'
        }

    ]
    return (
        <section className='cart'>
            <div>
                <h2>Cart</h2>
                {cartItems.length === 0 ? (<p>Your cart is empty</p>) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.quantity}</p>
                                <p>{item.total}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default page