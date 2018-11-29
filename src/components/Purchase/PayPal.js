import React from 'react'

var MyCartComponent = window.React.createClass({
    render: function () {

        let client = {
            hello: "hello"
        };

        let payment = () => {
            amount: 1
        };

        let onAuthorize = (data, actions) => {
            back: "back"
        };

        let PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

        return (<div className='shoppingCart'>
            <p>Buy <strong>Full Body Lobster Onesie - $24.99</strong> now!</p>

            <PayPalButton
                client={client}
                payment={payment}
                commit={true}
                onAuthorize={onAuthorize} />
        </div>);
    }
});