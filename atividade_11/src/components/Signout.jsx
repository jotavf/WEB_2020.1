import React, { Component } from 'react';
import Card from './Card';

import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

class Signout extends Component {

    componentDidMount(){
        if(this.props.firebaseAuth.isLoaded && this.props.firebaseAuth.isEmpty){
            this.props.history.push('/signin')
        }
    }

    logout(){
        this.props.mySignout(()=>{
            console.log("logout")
            this.props.history.push('/signin')
        })
    }

    render() {
        return (
            <Card title="Signout">
                Conteúdo para usuários <br /> <br />
                <button className="btn btn-danger" onClick={()=>this.logout()}>
                    Fazer Logout
                </button>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
      userMsg: state.authReducer.authMsg,
      firebaseAuth: state.firebaseReducer.auth
    }
  }

  function mapDispatchToProps(dispatch) {
      return {
          mySignout(callback) {
              const action = signout(callback)
              dispatch(action)
          }
      }
  }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
    )(Signout)