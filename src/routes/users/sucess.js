import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
const SucessMessage = (props) => {
  return <div className="row">
      <div className="col">
        <h1>You Register Sucessfully</h1>
        <p>You can now <Link to="/users/login">login</Link></p>
      </div>
    </div>
}
class SucessRegister extends Component {
  render(){
    return <Layout>
        <SucessMessage />
      </Layout>
  }
}
export default SucessRegister;