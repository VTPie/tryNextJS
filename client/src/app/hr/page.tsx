"use client";

import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import useSWR from "swr";
import AddModal from "@/components/addStaff.modal";
import DeleteModal from "@/components/deleteStaff.modal";
import EditModal from "@/components/editStaff.modal";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import Pagination from "@/components/pagination";
import { paginate } from "./paginate";
import Papa from "papaparse";
import { Form } from "react-bootstrap";

const HrPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/staff",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const staff: Person[] = data;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [editing, setEditing] = useState<Person | null>(null);

  const handleClickEdit = (staff: Person) => {
    setShowModalEdit(true);
    setEditing(staff);
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (staff && staff.length > 0) {
    const paginated = paginate(staff, currentPage, pageSize);
    console.log("check paginate post: ", paginated);
    return (
      <div>
        <h1 className="title">HR Manager</h1>
        <Container>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Staff list</h4>
            <AddModal />
          </div>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* {isLoading === true && (
              <tbody>
                <tr>
                  <td colSpan={6}>Loading ...</td>
                </tr>
              </tbody>
            )}

            {error === true && (
              <tbody>
                <tr>
                  <td colSpan={6}>Something wrong ...</td>
                </tr>
              </tbody>
            )} */}

            {isLoading === false && paginated && paginated.length > 0 && (
              <tbody>
                {paginated.map((man) => {
                  return (
                    <tr key={man.id}>
                      <td>{man.id}</td>
                      <td>{man.name}</td>
                      <td>{man.email}</td>
                      <td>{man.position}</td>
                      <td>{man.age}</td>
                      <td>
                        <Button
                          variant="outline-warning"
                          className="me-3 px-4"
                          onClick={() => handleClickEdit(man)}
                        >
                          Edit
                        </Button>
                        <DeleteModal id={man.id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </Table>
          {isLoading === false && paginated && paginated.length > 0 && (
            <Pagination
              items={staff.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          )}
          {isLoading === false && paginated && paginated.length > 0 && (
            <div className="btnExport">
              <CSVLink data={staff} className="txtExport">
                Export
              </CSVLink>
            </div>
          )}

          <EditModal
            showModalEdit={showModalEdit}
            setShowModalEdit={setShowModalEdit}
            editing={editing}
            setEditing={setEditing}
          />
        </Container>
      </div>
    );
  }

  return (
    <Container>
      <div>
        <h1 className="title">HR Manager</h1>
        <p className="text-center text-danger fs-5">
          Connecting to database ...
        </p>
      </div>
    </Container>
  );
};
export default HrPage;
