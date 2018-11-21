import React from "react"

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 2500
const myFetch = 'https://sfjzk8cuv9.execute-api.us-east-1.amazonaws.com/dev/billing'
const cardStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "3rem",
    boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
    backgroundColor: "#fff",
    borderRadius: "6px",
    maxWidth: "400px",
}
const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
}

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
let stripeHandler = undefined

class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            buttonText: "BUY NOW",
            paymentMessage: "",
        }
    }

    resetButton() {
        this.setState({ disabled: false, buttonText: "BUY NOW" })
    }

    componentDidMount() {
        this.stripeHandler = window.StripeCheckout.configure({
            key: "pk_test_JEX1JVjLG1P75jbd3I9YU3EF",
            closed: () => {
                this.resetButton()
            },
        })
    }

    openStripeCheckout(event) {
        event.preventDefault()
        this.setState({ disabled: true, buttonText: "WAITING..." })
        this.stripeHandler.open({
            name: "Bababa",
            amount: amount,
            description: "A product well worth your time",
            token: token => {
                /// TODO: THIS NEEDS LAMBDA URL of PRODUCTION
                // fetch(`https://sfjzk8cuv9.execute-api.us-east-1.amazonaws.com/dev/billing`, {
                // FETCH IS THE SHITTY THING DON"T WORK IN LOCAL
                fetch(myFetch, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({
                        token,
                        amount,
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json",
                    }),
                })
                    .then(res => {
                        console.log("Transaction processed successfully")
                        this.resetButton()
                        this.setState({ paymentMessage: "Payment Successful!" })
                        return res
                    })
                    .catch(error => {
                        console.error("Error:", error)
                        this.setState({ paymentMessage: "Payment Failed" })
                    })
            },
        })
    }

    render() {
        return (
            <div style={cardStyles}>
                <h4>Spend your Money!</h4>
                <p>
                    Use any email, 4242 4242 4242 4242 as the credit card number, any 3
                    digit number, and any future date of expiration.
        </p>
                <button
                    style={buttonStyles}
                    onClick={event => this.openStripeCheckout(event)}
                    disabled={this.state.disabled}
                >
                    {this.state.buttonText}
                </button>
                {this.state.paymentMessage}
            </div>
        )
    }
}

export default Checkout