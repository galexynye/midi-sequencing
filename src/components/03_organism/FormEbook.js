import React from 'react'
import { ButtonCTA } from "../01_atom/ButtonCTA";
import { FormHeader } from "../02_molecule/FormHeader";
import { WidthWrapper } from "../02_molecule/WidthWrapper";
import { InputEmail } from "../01_atom/InputEmail";
/*

Atoms
// Generic Caption Paragraph or something, block quote
// Header for the Form - FormHeader - Styled component
// A Sub Header for the Form - SubHeader - Styled Component
// Button To Submit
// Email Input 
// Catpcha - Eventually
// Loading Component
// Success Message Component
// Failure Message Component

Molecules 
// Wrapper for Button and Email 
// Wrapper Header and Subheader - Probably can be the same one


*/

export class FormEbook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }
    // Update Email Function 
    // Async ebook send on button push
    render() {
        return (
            <div>
                <FormHeader title="The Ultimate Producer's Workflow" subtitle="How to FINISH Pro Quality Music : Doing EVERYTHING Yourself" />
                <WidthWrapper width="350px">
                    <InputEmail />
                    <ButtonCTA text={'Send a Copy'} width='100%' />
                </WidthWrapper>
                {/* <ButtonCTA text={'Send the Ultimate Producer\'s Workflow'} /> */}
            </div>
        )
    }
}





