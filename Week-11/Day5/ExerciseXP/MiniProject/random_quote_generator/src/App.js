import React, { Component } from 'react';
import "./App.css";
import quotes from "./data/quotes";


export class App extends Component {
  constructor(props) {
    super(); 
    this.state = { quote: "", author: "", currentIndex: 0 };
  } 
  componentDidMount() {
    const randomQuote = quotes[this.state.currentIndex];
    this.setState({ quote: randomQuote.quote, author: randomQuote.author });
  }
  handleClick = () => {
    this.setState((state) => {
      const newIndex = state.currentIndex + 1;
      const randomQuote = quotes[newIndex];
      return { 
        currentIndex: state.currentIndex + 1, 
        quote: randomQuote.quote,
        author: randomQuote.author
       };
    }); 
    this.changeBackgroundColor()
  };

  changeBackgroundColor = () => {
    const root = document.querySelector(":root");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("randomColor:", randomColor);
    root.style.setProperty("--primary-color", "#" + randomColor);
  };

  render() {
    return (
      <div className="box">
        <h1>{this.state.quote}</h1>
        <h2>-{this.state.author}-</h2>
        <div className="button-container">
          <button onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}


// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   incrementCounter = () => {
//     // this.setState({ count: this.state.count + 1 });
//     this.setState((state) => ({ count: state.count + 1 }));
//     this.setState((state) => ({ count: state.count + 1 }));
//     this.setState((state) => ({ count: state.count + 1 }));
//     // this.setState({ count: this.state.count + 1 });
//     // this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.incrementCounter}>Increment</button>
//       </div>
//     );
//   }
// }