"use client";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalEdit: boolean;
  setShowModalEdit: (value: boolean) => void;
  editing: Person | null;
  setEditing: (value: Person | null) => void;
}

function EditModal(props: IProps) {
  const { showModalEdit, setShowModalEdit, editing, setEditing } = props;
  const [id, setID] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    if (editing && editing.id) {
      setID(editing.id);
      setName(editing.name);
      setPosition(editing.position);
      setEmail(editing.email);
      setAge(editing.age);
    }
  }, [editing]);

  const handleUpdateStaff = () => {
    if (!name || !age || !email || !position) {
      toast.error("Input cannot be empty.");
      return;
    }
    fetch(`http://localhost:3001/staff/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, position, age }),
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("Update staff succeed!");
        handleCloseModal();
        mutate("http://localhost:3001/staff");
      });
  };

  const handleCloseModal = () => {
    setEditing(null);
    setShowModalEdit(false);
  };

  return (
    <>
      <Modal
        show={showModalEdit}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" value={id} readOnly />
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdateStaff()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
