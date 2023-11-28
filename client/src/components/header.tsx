"use client";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, NavDropdown, Navbar, Row } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <Container className="mt-3">
      <Row className="text-center justify-content-center">
        <Col lg="2">
          <Link href="/home" className="navLink">
            Home
          </Link>
        </Col>
        <Col lg="2">
          <Link href="/hr" className="navLink">
            HR Manager
          </Link>
        </Col>
        <Col lg="2">
          <Link href="/csv" className="navLink">
            CSV Files
          </Link>
        </Col>
        <Col lg="2">
          <Link href="/books" className="navLink">
            Book Store
          </Link>
        </Col>
        <Col lg="2">
          <Link href="/login" className="navLink">
            Login
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
