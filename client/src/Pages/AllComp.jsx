import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/dashboard.css";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/comp/companies")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("/deleteComp/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Layout>
        <SideBar />

        <div id="container">
          <table>
            <thead>
              <a href="/create">
                <button className="button">Add New Firm</button>
              </a>
              <tr>
                <th> Company Legal Number:</th>
                <th>Company Name</th>
                <th>Incorporation Country</th>
                <th> Website</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((record) => (
                <tr key={record.key}>
                  <td>{record.companyLegalNumber}</td>
                  <td>{record.companyName}</td>
                  <td>{record.incorporationCountry}</td>
                  <td>{record.website}</td>

                  <td>
                    <Link to={`/update/${record._id}`}>
                      <button className="button">Edit</button>
                    </Link>

                    <button
                      className="button"
                      onClick={(e) => handleDelete(record._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
//import { Table, Col, Row, Modal, Button, Layout, Form, Input } from "antd";
//import ButtonGroup from "antd/es/button/button-group";
// <Row gutter={10}>
//       <Col span={18}>
//         <Table
//           className="dashboard"
//           dataSource={data}
//           columns={[
//             {
//               title: () => (
//                 <Button
//                   onClick={() => setModal(true)}
//                   className="addButton"
//                   type="primary"
//                 >
//                   Add New Firm
//                 </Button>
//               ),
//               dataIndex: "id",
//               key: "id",
//               fixed: true,
//             },
//             {
//               dataIndex: "sirketAdi",
//               title: "Company Name",
//               key: "sirketAdi",
//               render: (t) => (
//                 <>
//                   {data.map((item, key) => (
//                     <Input
//                       key={key}
//                       value={item.companyName}
//                       onChange={(e) => handleInputChange(e.target.value)}
//                     />
//                   ))}
//                 </>
//               ),
//             },
//             {
//               dataIndex: "sirketAdi",
//               title: "Company Legal Number",
//               key: "number",
//               render: (t) => (
//                 <>
//                   {data.map((item, key) => (
//                     <Input
//                       key={key}
//                       value={item.companyLegalNumber}
//                       onChange={(e) => handleInputChange(e.target.value)}
//                     />
//                   ))}
//                 </>
//               ),
//             },
//             {
//               dataIndex: "webSitesi",
//               title: "Website",
//               key: "webSitesi",
//               render: (text, record) => (
//                 <>
//                   {data.map((item, key) => (
//                     <Input
//                       key={key}
//                       value={item.website}
//                       onChange={(e) => handleInputChange(e.target.value)}
//                     />
//                   ))}
//                 </>
//               ),
//             },
//             {
//               dataIndex: "incoCountry",
//               title: "Incorporation Country",
//               key: "incoCountry",
//               render: (t) => (
//                 <>
//                   {data.map((item, key) => (
//                     <Input
//                       key={key}
//                       value={item.incorporationCountry}
//                       onChange={(e) => handleInputChange(e.target.value)}
//                     />
//                   ))}
//                 </>
//               ),
//             },
//             {
//               title: "Actions",
//               render: (text, record) => (
//                 <ButtonGroup>
//                   {record.isEditing ? (
//                     <Button
//                       type="primary"
//                       onClick={() => handleSave(record.key)}
//                     >
//                       Save
//                     </Button>
//                   ) : (
//                     <Button onClick={() => handleInputChange(record.key)}>
//                       Edit
//                     </Button>
//                   )}
//                   <Button
//                     type="primary"
//                     danger
//                     onClick={() => handleDelete(record.key)}
//                   >
//                     Delete
//                   </Button>
//                 </ButtonGroup>
//               ),
//             },
//           ]}
//         ></Table>
//       </Col>
//     </Row>
//     <Modal
//       visible={modal}
//       onCancel={() => setModal(false)}
//       title={"Add new user"}
//       onOk={handleAddNewCompany}
//     >
//       <Form>
//         <Form.Item label={"Company Name:"}>
//           <Input
//             value={newCompany.sirketAdi}
//             onChange={(e) =>
//               setNewCompany({ ...newCompany, sirketAdi: e.target.value })
//             }
//           />
//         </Form.Item>
//         <Form.Item label={"Web:"}>
//           <Input
//             value={newCompany.webSitesi}
//             onChange={(e) =>
//               setNewCompany({ ...newCompany, webSitesi: e.target.value })
//             }
//           />
//         </Form.Item>
//         <Form.Item label={"Company Legal Number:"}>
//           <Input
//             value={newCompany.number}
//             onChange={(e) =>
//               setNewCompany({ ...newCompany, number: e.target.value })
//             }
//           />
//         </Form.Item>
//         <Form.Item label={"Incorporation Country:"}>
//           <Input
//             value={newCompany.incoCountry}
//             onChange={(e) =>
//               setNewCompany({ ...newCompany, incoCountry: e.target.value })
//             }
//           />
//         </Form.Item>
//       </Form>
