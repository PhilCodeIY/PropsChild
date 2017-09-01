import React, { Component } from 'react';
import '../styles/App.css';
import ChildComponent from '../components/Child.js';
import DisplayComponent from '../components/Display.js';


export default class ParentComponent extends Component {
  constructor(props){
    super(props);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }

        //we are really in a *bind* here.... :)
        //fix it...
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({
      whatWasSaid: this.state.whatToSay,
      whatToSay: ''
    });
    //clear our input by resetting state
    // this.setState({whatToSay: ""});
  }
  render() {
    return (
      // <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
      <form>
        <div>
          <input onChange={this.handleInput} value={this.state.whatToSay} name="whatToSay" type="text" placeholder="Say It, Don't Spray It!" />
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
            <div id = "message">
                <p>State, props, children, function, fun!</p>
                  <h4>Message:</h4>
                <DisplayComponent sayWhat={this.state.whatWasSaid} />
              <br />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
