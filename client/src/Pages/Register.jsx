import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Button, Input, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../redux/auth";

const Register = () => {
  const [signUp, setSignUp] = useState(true);
 const [authData, setAuthData] = useState({
   username: "",
   email: "",
   password: "",
 });

  const dispatch = useDispatch();

const authFunc = (e, field) => {
  setAuthData({ ...authData, [field]: e.target.value });
};

  const authFunction = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  console.log(authData);

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col span={8}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            {signUp && (
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                value={authData.username}
                onChange={(e) => authFunc(e, "username")}
              />
            )}
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your e-mail!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
              value={authData.email}
              onChange={(e) => authFunc(e, "email")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={authData.password}
              onChange={(e) => authFunc(e, "password")}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="button"
              className="login-form-button"
              onClick={authFunction}
            >
              {signUp ? "REGISTER" : "LOGIN"}
            </Button>
            Or{" "}
            {signUp ? (
              <a onClick={() => setSignUp(false)}>Login now</a>
            ) : (
              <a onClick={() => setSignUp(true)}>Register now</a>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
