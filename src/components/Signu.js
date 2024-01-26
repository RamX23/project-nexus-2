import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {database} from './firebaseConfig'
import {createUserWithEmailAndPassword} from'firebase/auth'


export default function Signu() {

  const history=useNavigate()

  const handelSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    createUserWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData");
      history('/Login')
    })
  }
  return (
    <div>
      <div style={{border:'2px solid black' ,width:'350px', padding:'20px',position:'absolute', left:'35%', top:'20%'} }>
  <form onSubmit={(e)=>handelSubmit(e)}>
    {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h2 mb-3 fw-bold" style={{textAlign:'center'}}>Sign Up</h1>

    <div className="form-floating my-2">
      <input type='' className="form-control" id="floatingname" placeholder="Fullname" name='fullname'/>
      <label htmlFor="floatingInput">Full name</label>
    </div>
    <div className="form-floating my-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email'/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password'/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Signup
        </button>
    <p className="mt-3 mb-3 text-body-secondary">Already have account,<Link to="/Login">Login</Link></p>
  </form>  
  </div>
    </div>
  )
}
