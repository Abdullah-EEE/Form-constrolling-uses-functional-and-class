import React,{useState} from 'react';
import style from "./form.module.css";

export default function Forms() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

     const handelName=(e)=>{
        setName(e.target.value)
     }
     const handelEmail=(e)=>{
        setEmail(e.target.value)
     }
     const handelPassword=(e)=>{
        setPassword(e.target.value)
     }
     const handelSubmit=(e)=>{
        
        //console.log(name,email,password)
        let userinfo={
            name,
            email,
            password
        }
        console.log(userinfo)
        e.preventDefault();
     }

  return (
    <div className={style.full_decor}>
      <h1>Registration</h1>
      <div>
        <form action="" onSubmit={handelSubmit}>
            <div className={style.form_group}>
                <div>
                    <label for='name'>Name:  </label>
                </div>
                <div>
                    <input type="text" name="name" id="name" onChange={handelName} value={name} required />
                </div>
                
            </div>

            <div className={style.form_group}>
               <div>
                    <label for='email'>Email:  </label>
               </div>
               
                <div>
                    <input type="email" name="email" id="email" onChange={handelEmail} value={email} required />
                </div>
            </div>
            

            <div className={style.form_group}>
                <label for='password'>password:  </label>
                <input type="password" name="password" id="password" onChange={handelPassword} value={password} required />
            </div>
            <br/>

            <div className={style.form_group}>
                <button className={style.button} tupe="submit" >Register</button>
            </div>

            

        </form>
        <p>congratulation !{name},how are you</p>
      </div>
    </div>
  )
}
