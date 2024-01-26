import React,{useState} from 'react';
import After from './After';
import {Link, Outlet,useNavigate} from 'react-router-dom';
import {database} from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const history=useNavigate()
  const [user, setuser] = useState({
    email:"",
    password:""
  });
  const handlechange = (e)=>{
    const {name,value}=e.target;
    setuser({
      ...user,
      [name]:value
    })
  }
  const handelSubmit=(e,type)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(database, email, password).then(data=>{
      console.log(data,"authData")
      history('/after')
      
    }).catch(err=>{
      alert(err.code)
    })

  }
  return (
    <>
    {/* {console.log("user",user)} */}
  <div style={{border:'2px solid black' ,width:'350px', padding:'20px',position:'absolute', left:'35%', top:'20%'} }>
  <form onSubmit={(e)=>handelSubmit(e)}>
    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h2 mb-3 fw-bold" style={{textAlign:'center'}}>Sign in</h1>

    <div className="form-floating my-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' value={user.email} onChange={handlechange}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' value={user.password} onChange={handlechange}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Login
        </button>
    <p className="mt-3 mb-3 text-body-secondary">New here,<Link to="/Signup">Sign up</Link></p>
  </form>
  </div>
<Outlet/>

    </>
  
  )
}

export default Login

