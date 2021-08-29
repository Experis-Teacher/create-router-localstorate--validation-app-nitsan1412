import React, { Component } from 'react'

export default class Finish extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.setState({
            name: localStorage["name"],
            phone: localStorage["phone"]
        })
    }

    navigate = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1> Finish Page</h1>
                <h2>Your Name: {this.state.name}</h2>
                <h2>Your Phone number: {this.state.phone}</h2>
                <button onClick={this.navigate}>bach to home</button>
            </div>
        )
    }
}
