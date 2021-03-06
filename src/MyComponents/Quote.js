import React, { Component } from 'react'

export default class Quote extends Component {
    
    render() {
        return (
            <div id='quote'>
                <div id='text'>
                    <i className="fa fa-quote-left">  </i><span className="text">{this.props.quote}</span>
                </div>
                <div id='author'>- {this.props.author}</div>
            </div>
        )
    }
}
