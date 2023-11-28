"use client";

import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const [psw, setPsw] = useState<string>("");
  const handleSubmit = () => {
    if (!email || !psw) {
      toast.error("Input cannot be empty.");
      return;
    }
    if (email !== "admin@email.com" || psw !== "admin") {
      toast.error("Email or Password is incorrect.");
      return;
    } else {
      toast.success("Logged in successfully");
      router.replace("/home");
    }
  };
  return (
    <Container>
      <h1 className="title">Login</h1>
      <Row className="justify-content-md-center">
        <Col lg="4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPsw(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="d-block mx-auto"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
