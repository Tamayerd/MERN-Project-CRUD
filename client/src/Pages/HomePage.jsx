import React, { useEffect, useState } from "react";
import { Table, Card, Layout, Divider,Input } from "antd";
import { Content } from "antd/es/layout/layout";
import "../styles/dashboard.css";
import SideBar from "../components/SideBar";
import axios from "axios"

const { Column, ColumnGroup } = Table;

const HomePage = () => {
  const [totalCompanies, setTotalCompanies] = useState(0);


  useEffect(() => {
    axios
      .get("http://localhost:4000/getTotalCompanies")
      .then((response) => {
        
        setTotalCompanies(response.data.totalCompanies);
       
      })
      .catch((error) => {
        console.error(error);
        
      });
  }, []); 
  
  return (
    <>
      <Layout>
        <SideBar> </SideBar>
       

        <Content className="dashboard">
          <Input.Search placeholder="Search here..."></Input.Search>
          <Card
            title={`There are ${totalCompanies} numbers of companies in the system`}
            bordered={false}
            style={{
              width: 500,
              height: 60,
            }}
          ></Card>
          <Divider></Divider>
          <Table >
            <ColumnGroup title="Lastly added companies:">
              <Column title="Companie" dataIndex="sirketAdi" key="sirketAdi" />
              <Column title="No" dataIndex="tescilNo" key="tescilNo" />
            </ColumnGroup>
            <Column
              title="Country"
              dataIndex="kurulusUlkesi"
              key="kurulusUlkesi"
            />
            <Column title="Web Site" dataIndex="webSitesi" key="webSitesi" />
          </Table>
        </Content>
      </Layout>
    </>
  );
};

export default HomePage;
