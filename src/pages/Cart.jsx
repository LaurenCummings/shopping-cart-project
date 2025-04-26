import { useSelector } from 'react-redux';

function Cart() {
    const { cart } = useSelector(state => state)

    console.log(cart);

    return (
        <div>
            Cart
        </div>
    )
}

export default Cart;