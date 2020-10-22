import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return(
            <div class="content">
                <div class="card">
                    <div class="card-header">
                        {this.props.title}
                    </div>
                    <div class="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )    
    }
}