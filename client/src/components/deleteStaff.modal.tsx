import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { mutate } from "swr";
import { toast } from "react-toastify";

function DeleteModal(props: any) {
  const [show, setShow] = useState<boolean>(false);
  const id = props.id;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteStaff = () => {
    fetch(`http://localhost:3001/staff/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success("Delete staff succeed!");
        mutate("http://localhost:3001/staff");
      });
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-danger" className="ms-3" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete staff with id = {id}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleDeleteStaff()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
