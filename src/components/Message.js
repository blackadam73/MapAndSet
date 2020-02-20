

import React, { Component } from 'react'

class Message extends Component{
    constructor() {
        super()
        this.state = {
            message: ''

            }
        this.state = {
            message1: ""
        }
    }
    

    changeMessage() {
        this.setState({
            message: 'Map calls a provided callback function once for each element in an array; in order, and constructs a new array from the results. Callback is invoked only for indexes of the array which have assigned values (including undefined).  It is not called for missing elements of the array; that is, indexes that have never been set; which have been deleted; or which have never been assigned a value.  '
         }
        )
    }

    changeMessage1() {
        this.setState({
            message1: 'The Set object lets you store unique values of any type, whether primitive values or object references.  Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Sets collection.'
        }
       )
    }
    render () {

    return (
       <div>

<p>{this.state.message}</p>

<button onClick={() => this.changeMessage()}>'Map' command</button>
<p>{this.state.message1}</p>
<button onClick={() => this.changeMessage1()}>'Set' command</button>

   </div>
            )
    }

}

export default Message