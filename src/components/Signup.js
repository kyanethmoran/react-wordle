import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Signup() {
  //create the references for the email, password, and password confirm
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  // return the signup card component
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            {/* email must be of type email and is required */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            {/* password must be of type password and is required */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {/* password confirm must be of type password and is required */}
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
