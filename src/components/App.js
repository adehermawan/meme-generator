import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import Memeitem from './MemeItem';
import MyMeme from './MyMeme';
import { Form, FormGroup, FormLabel, FormControl} from 'react-bootstrap';

class App extends Component {

    constructor(){
        super();

        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }

    }


    render() {
        console.log('this.props',this.props);
        return(
            <div>
                <h2><u>Welcome to the Meme Generator</u></h2>
                <MyMeme />
                <h4><i>Write Some Text</i></h4>
                <Form inline>
                <FormGroup>
                    <FormLabel>Top</FormLabel>
                    {' '}
                    <FormControl
                    type="text"
                    onChange={event => this.setState({text0: event.target.value})}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Bottom</FormLabel>
                    {' '}
                    <FormControl
                    type="text"
                    onChange={ event => this.setState({text1: event.target.value})}
                    />
                </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0,this.state.memeLimit).map((meme,index) => {
                        return (
                            <Memeitem 
                            key={index} 
                            meme={meme}
                            text0={this.state.text0}
                            text1={this.state.text1}
                            />
                        )
                    })
                }
                <div className="meme-button" onClick={ () => this.setState(
                    {
                        memeLimit: this.state.memeLimit+10
                    }
                )}>
                    Load 10 more memes ...
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,null)(App);