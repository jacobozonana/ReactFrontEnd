import React, { useState } from "react";
import Header from "./Layout/Header";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async (event) =>{
    event.preventDefault();
    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    const SIGNUP_URL = `http://localhost:8080/api/v1/signup/`
    try {
      await axios.post(SIGNUP_URL, jsonSend)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      alert('Succesfully created acccount')
    }catch (error){
      alert('Error on signup')
    }
  };
  return (
    <>
    <Header />
      <h1 className="mb-4">Signup</h1>
      <Form className="container" onSubmit={handleForm}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="inputFirstName"
            placeholder="type your first name"
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            id="inputLastname"
            placeholder="type your last name"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default Register;
