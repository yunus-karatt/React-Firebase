import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {useUserAuth} from '../context/UserAuthContext'

const Login = () => {
  const [input, setInput] = useState({});
  const [error,setError]=useState('')
  const {logIn,googleSignIn}=useUserAuth()
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError('')
    try{
      await logIn(input.email,input.password)
      navigate('/home')
    }catch(err){
      setError(err.message)
    }
  }

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGoogleSignIn=async(e)=>{
    e.preventDefault()
    try{
      await googleSignIn()
      navigate('/home')
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            name="email"
            onChange={(e)=>handleChange(e)}
            type="email" placeholder="email address"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
            name="password"
            onChange={(e)=>handleChange(e)}
            type="password"  placeholder="password"/>
          </Form.Group>
        
        <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
            Log In
          </Button>
        </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn"
          onClick={(e)=>handleGoogleSignIn(e)}
          type="dark"/>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  );
};

export default Login;