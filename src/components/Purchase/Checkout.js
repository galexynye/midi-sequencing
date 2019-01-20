import React from "react"
import MSLogo from '../../assets/MusicSeq-Logo_200px.png'
import styled from 'styled-components'
// import PayPal from './PayPal'

// Will be a molecule

/* TODO:
 
 Change The Fetch to Environment Variable

*/
const paymentSuccess = "success"
const paymentFailure = "failure"
const processingPayment = "processing"

// Dev or Prod API
const myFetch = process.env.STRIPE_LAMBDA_API

const PurchaseCard = styled.div`
    
    
    position: relative;
    text-align: center;
    padding: 2rem;
    box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
    background-color: #fff;
    border-radius: 6px;
    width: 200px;
    margin: 20px 20px 0px 0px;
    height: ${props => props.height || '250px'};
    h2{
        margin: 0px;
        font-size: 20px !important;
    }
    button:hover{
        cursor: pointer;
    }
`

const buttonStyles = {
    marginTop: "5px",
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.2)",
    backgroundColor: "#700bea",
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
            buttonText: "PURCHASE",
            paymentMessage: "",
        }
        this.resetButton = this.resetButton.bind(this)
    }

    resetButton() {
        this.setState({ disabled: false, buttonText: "PURCHASE", paymentMessage: "" })
    }

    componentDidMount() {
        this.stripeHandler = window.StripeCheckout.configure({
            key: process.env.STRIPE_KEY,
            closed: () => {
                // Resets button on manual close, but not after successful payment
                if (!this.state.paymentMessage) {
                    this.resetButton()
                }

            },
        })
    }

    openStripeCheckout(event) {
        event.preventDefault()
        this.setState({ disabled: true, buttonText: "PROCESSING..." })
        this.stripeHandler.open({
            name: "Private Lessons",
            image: MSLogo,
            amount: this.props.amount,
            description: this.props.title,
            token: token => {
                // Fetch only works as a variable?
                this.setState({ paymentMessage: processingPayment })
                fetch(myFetch, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify({
                        token,
                        amount: this.props.amount,
                        description: this.props.title
                    }),
                    headers: new Headers({
                        "Content-Type": "application/json",
                    }),
                })
                    .then(res => {
                        console.log("Transaction processed successfully")
                        this.setState({ paymentMessage: paymentSuccess })
                        return res
                    })
                    .catch(error => {
                        console.error("Error:", error)
                        this.setState({ paymentMessage: paymentFailure })
                    })
            },
        })
    }

    // TODO: Create a Success/Error component to replace the card content. Refactor the Purchase card component's insides into 
    // it's own component. Success component contains an X button in the top right corner to reset to the purchase component. 

    render() {

        // Actual Purchasing JSX 
        const purchase = (<div>
            <div
            // style={{ height: "80%" }}
            >
                <h2
                // style={{ height: "30px" }}
                >{this.props.title}
                </h2>
                <p
                // style={{ marginBottom: '0px', height: "30px" }}
                >{this.props.price}</p>
                <p>{this.props.description}</p>
            </div>

            <div
            // style={{ height: "20%" }}
            >
                <div
                // style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <button
                        // style={buttonStyles}
                        onClick={event => this.openStripeCheckout(event)}
                        disabled={this.state.disabled}
                    >
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        </div >)

        // Successful Purchase Card
        const purchaseSucceed = (<div>
            {/* <div style={{ height: "80%" }}> */}
            <div>
                <h2
                // style={{ height: "30px" }}
                >Purchase Successful!</h2>
                <div
                // style={{ fontSize: "14px" }}                
                >
                    <p>Thank you for your purchase of {this.props.title}.</p>
                    <p>Please email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> with the subject "Schedule Lessons", include your name and prefered starting date(s)/time(s) to get started!</p>
                    <button onClick={this.resetButton}
                    // style={{ color: "red", border: "none", backgroundColor: "white" }}
                    >Close</button>
                </div>
            </div>
        </div >)



        const processing = <p>Processing...</p>

        return (
            <PurchaseCard height={this.state.height}>
                <div>
                    {!this.state.paymentMessage && purchase}
                    {this.state.paymentMessage === paymentSuccess && purchaseSucceed}
                    {this.state.paymentMessage === processingPayment && processing}
                    {this.state.paymentMessage === paymentFailure && purchaseSucceed}
                </div>
            </PurchaseCard>
        )
    }
}

export default Checkout