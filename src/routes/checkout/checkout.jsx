import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                <span>Product</span>
                </div>
                <div className='header-block'>
                <span>Description</span>
                </div>
                <div className='header-block'>
                <span>Quantity</span>
                </div>
                <div className='header-block'>
                <span>Price</span>
                </div>
                <div className='header-block'>
                <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
            ))}
            <div className='total'>Total: ${cartTotal}</div>
            <PaymentForm />
    </div>
    )
}

export default Checkout;
