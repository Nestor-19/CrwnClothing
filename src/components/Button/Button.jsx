// We have 3 different types of button:
// 1. default
// 2. inverted
// 3. google sign in

import './Button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    // Purpose of this object is to apply specific button styling 
    // based on the buttonType prop passed into this component
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;
