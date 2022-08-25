import React, { Component } from 'react'
import style from './form.module.css'

export default class Classc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         email:"",
         password:''
      }
    //   this.handelSubmit=this.handelSubmit.bind(this);

    }

    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handelEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handelPassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    handelSubmit=(e)=>{
        e.preventDefault();
       let userinfo={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
       }
       console.log(userinfo)
    }


    
  render() {
    return (
       <div className={style.full_decor}>
            <h1>Registration</h1>
        <div>
        <form action="" onSubmit={this.handelSubmit}>
            <div className={style.form_group}>
                <div>
                    <label for='name'>Name:  </label>
                </div>
                <div>
                    <input type="text" name="name" id="name" onChange={this.handelName} value={this.state.name} required />
                </div>
                
            </div>

            <div className={style.form_group}>
               <div>
                    <label for='email'>Email:  </label>
               </div>
               
                <div>
                    <input type="email" name="email" id="email" onChange={this.handelEmail} value={this.state.email} required />
                </div>
            </div>
            

            <div className={style.form_group}>
                <label for='password'>password:  </label>
                <input type="password" name="password" id="password" onChange={this.handelPassword} value={this.state.password} required />
            </div>
            <br/>

            <div className={style.form_group}>
                <button className={style.button} tupe="submit" >Register</button>
            </div>
        </form>
       
      </div>
      </div>
    )
  }
}
