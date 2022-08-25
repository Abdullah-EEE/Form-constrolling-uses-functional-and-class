import React,{useState} from 'react';
import style from "./form.module.css";

export default function Forms() {
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");

    const [user,setUser]=useState({name:"",email:"",password:""});
    const {name,email,password}=user;

    //  const handelName=(e)=>{
    //     //setName(e.target.value)
    //     setUser({name:e.target.value,email,password});
    //  }
    //  const handelEmail=(e)=>{
    //     //setEmail(e.target.value)
    //     setUser({name,email:e.target.value,password});
    //  }
    //  const handelPassword=(e)=>{
    //     //setPassword(e.target.value)
    //     setUser({name,email,password:e.target.value});
        
    //  }

     const handelChange=(e)=>{
        let filedName=e.target.name;
        // if(filedName==="name"){
        //     setUser({name:e.target.value,email,password});

        // }
        // else if(filedName==="email"){
        //     setUser({name,email:e.target.value,password});

        // }
        // else if(filedName==="password"){
        //     setUser({name,email,password:e.target.value});

        // }
        
        setUser({...user,[filedName]:e.target.value});

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
                    <input type="text" name="name" id="name" onChange={handelChange} value={name} required />
                </div>
                
            </div>

            <div className={style.form_group}>
               <div>
                    <label for='email'>Email:  </label>
               </div>
               
                <div>
                    <input type="email" name="email" id="email" onChange={handelChange} value={email} required />
                </div>
            </div>
            

            <div className={style.form_group}>
                <label for='password'>password:  </label>
                <input type="password" name="password" id="password" onChange={handelChange} value={password} required />
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
