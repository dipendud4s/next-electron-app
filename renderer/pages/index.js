import { Component } from 'react';
import Head from 'next/head'
import Router from 'next/router'

export default class extends Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHover2 = this.handleMouseHover2.bind(this);
    this.state = {
      isHovering: false,
      isHovering2: false,
      isShow: false
    };
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   global.ipcRenderer.send('message', this.state.input)
  //   this.setState({ message: null })
  // }

  handleClick = event => {
    
    this.setState({
      isShow: !this.state.isShow
    });


    // event.preventDefault()
    // fetch('/api/runapp').then(res => res.json())
    // .then(json => {
    //   console.log(json);
    // })
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  handleMouseHover2() {
    this.setState(this.toggleHoverState2);
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  toggleHoverState2(state) {
    return {
      isHovering2: !state.isHovering2,
    };
  }

  render() {
    return (
      <div className="test" style={{ padding: '1px', backgroundImage: 'url(/bg.jpg)'}}>
        <Head>
          <title>My apps</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <h1>Welcome to My apps</h1>
        <div className="container app-but">
          <div className="row">
            <div className="col-sm">
              <button type="button" 
              onClick={this.handleClick}
              onMouseEnter={this.handleMouseHover}
              onMouseLeave={this.handleMouseHover}
              className="btn btn-primary">Run the app</button>
            </div>
            <div className="col-sm">
              <button type="button" 
              onMouseEnter={this.handleMouseHover2}
              onMouseLeave={this.handleMouseHover2}
              className="btn btn-primary">Get help</button>
            </div>
          </div>
        </div>
        {
          !this.state.isShow && this.state.isHovering &&
          <div className="showAlter">
            Hovering right meow! 🐱
          </div>
        }
        {
          !this.state.isShow && this.state.isHovering2 &&
          <div className="showAlter">
            Hovering222 right meow! 🐱
          </div>
        }
        {
          this.state.isShow &&
          <div className="showAlter">
            <button type="button" 
              onClick={() => Router.push('/post/abc')}
              className="btn btn-default">Get help</button>
              <br/>
              <br/>
              <br/>
            <button onClick={() => Router.push('/post')} 
              type="button"
              className="btn btn-default">Get help</button>
              <br/>
              <br/>
              <br/>
          </div>
        }
        {/* {this.state.message && <p>{this.state.message}</p>}
        <button onClick={this.handleClick}>Click me</button> */}

        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form> */}

        <style jsx>{`
          h1 {
            color: white;
            margin-top: 50px;
            font-size: 50px;
            text-align:center;
          }
          .test{
            width: 100vw;
            height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;        
          }
          .app-but{
            margin-top:50px;
            text-align:center;

          }
          .showAlter{
            margin-top:50px;
            padding:100px;
            color:white;
            font-size: 20px;
          }
        `}</style>
      </div>
    )
  }
}
