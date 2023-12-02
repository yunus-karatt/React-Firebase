import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [input, setInput] = useState({});
  const [error,setError]=useState('')
  const {signUp}=useUserAuth()
  const navigate=useNavigate()

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setError('')
    try{
      await signUp(input.email,input.password)
      navigate('/')
    }catch(err){
      setError(err.message)
    }
  };
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
