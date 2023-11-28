"use client";

import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Papa from "papaparse";
import { useState } from "react";

const CsvPage = () => {
  const [dataImport, setDataImport] = useState<any[]>([]);

  const handleChangeFile = (event: any) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        setDataImport(results.data);
        console.log(">>> check data: ", results.data);
      },
    });
  };

  return (
    <div>
      <h1 className="title">Import CSV files</h1>
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3 w-50 mx-auto">
              <Form.Label>Import your CSV file:</Form.Label>
              <Form.Control
                type="file"
                onChange={handleChangeFile}
                accept=".csv"
              />
            </Form.Group>
            {dataImport.length > 0 && (
              <Table striped bordered hover className="text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {dataImport.map((man) => {
                    return (
                      <tr key={man.id}>
                        <td>{man.id}</td>
                        <td>{man.name}</td>
                        <td>{man.email}</td>
                        <td>{man.position}</td>
                        <td>{man.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CsvPage;
