import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log('this.props',this.props);
        return(
            <div>
                <h2>Welcome to the Meme Generator</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,null)(App);