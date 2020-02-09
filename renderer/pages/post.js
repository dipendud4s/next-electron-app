import { Component } from 'react';
import Head from 'next/head'
import Router from 'next/router'
import { useRouter } from 'next/router'

export default class extends Component {

  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    const { pathname, query } = this.props.router
    // verify props have changed to avoid an infinite loop
    if (query.counter !== prevProps.router.query.counter) {
      // fetch data based on the new query
    }
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
              className="btn btn-primary">Run the app</button>
            </div>
            <div className="col-sm">
              <button type="button" onClick={() => Router.push('/index')} 
              className="btn btn-primary">Back</button>
            </div>
          </div>
        </div>
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
