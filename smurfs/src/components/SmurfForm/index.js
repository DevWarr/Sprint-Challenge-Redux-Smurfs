import React, { Component } from "react"
import { connect } from "react-redux";
import { postSmurf, putSmurf } from "../../actions";

import { FormContainer, Form, Input, Button } from "./SmurfFormSC"

class SmurfForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:                 "",
            name:               "",
            age:                "",
            height:             "",
            msgTitle:           "Add a new Smurf!",
            msgButton:          "Add to the Village",
            func:               this.addSmurf
        }
    }

    componentWillMount() {
        console.log(this.props);
        if (this.props.editSmurf.id) {
            this.setState({
                id:             this.props.editSmurf.id,
                name:           this.props.editSmurf.name,
                age:            this.props.editSmurf.age,
                height:         this.props.editSmurf.height.substring(0, this.props.editSmurf.height.length-2),
                msgTitle:       "Edit Smurf info:",
                msgButton:      "Confirm Changes",
                func:           this.updateSmurf
            })
        }
    }

    addSmurf = event => {
        event.preventDefault()

        const newSmurf = {
            name:               this.state.name,
            age:                Number(this.state.age),
            height:             `${this.state.height}cm`
        }

        this.setState({
            name:               "",
            age:                "",
            height:             ""
        })

        this.props.postSmurf(newSmurf);
        this.props.history.push("/");
    }

    updateSmurf = e => {
        e.preventDefault()
        const smurf = {
            id:                 this.state.id,
            name:               this.state.name,
            age:                Number(this.state.age),
            height:             `${this.state.height}cm`
        }

        this.setState({
            name:               "",
            age:                "",
            height:             ""
        })

        this.props.putSmurf(smurf);
        this.props.history.push("/");
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <FormContainer>
                <Form onSubmit=         {this.state.func} >
                    <h2>{this.state.msgTitle}</h2>
                    <Input
                        type=           "text"
                        onChange=       {this.handleInputChange}
                        placeholder=    "name"
                        value=          {this.state.name}
                        name=           "name"
                        required
                    />
                    <Input
                        type=           "number"
                        onChange=       {this.handleInputChange}
                        placeholder=    "age"
                        value=          {this.state.age}
                        name=           "age"
                        required
                    />
                    <Input
                        type=           "number"
                        onChange=       {this.handleInputChange}
                        placeholder=    "height"
                        value=          {this.state.height}
                        name=           "height"
                        required
                    />
                    <Button type=       "submit">
                        {this.state.msgButton}
                    </Button>
                </Form>
            </FormContainer>
        )
    }
}

const mstp = state => {
    return {
        editSmurf: state.editSmurf
    };
}

export default connect(mstp, { postSmurf, putSmurf })(SmurfForm)
