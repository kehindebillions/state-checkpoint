
import './App.css';
import React, { Component } from 'react'
import image from './mypicture.jpg'

export class App extends Component {
  state = {
    fullName:'kehinde billions',
    bio: 'im a billionaire, i built my millions with one naira years ago',
    imgSrc: image,
    profession: 'software developer',
    boolShow: true,
    timeInterval: 0
  }
  handleBoolShow = () => {
    this.setState ({
      boolShow: !this.state.boolShow
    })
  }

  componentDidMount() {
    setInterval(()=> this.setState({timeInterval:this.state.timeInterval + 1}), 1000)
  }
  render() {
    return (
      <div className='App'>
        {this.state.boolShow && (
          <div>
            <h1>fullName:{this.state.fullName}</h1>
            <h1>bio:{this.state.bio}</h1>
            <img src={this.state.imgSrc} height='400' width='400' alt='mypicture' />
            <h1>profession:{this.state.profession}</h1>
          </div>
        )}
        
      <button onClick={this.handleBoolShow}>Click</button>

      <p>{this.state.timeInterval}</p>
      </div>
    )
  }
}

export default App



