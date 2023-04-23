import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Registration() {
  const [authValue, setAuthValue] = useState({});
  const onFinish = (values) => {
    setAuthValue(values)
  };
  useEffect(() => {
    axios.post(`http://188.225.31.249:8000/api/v1/login`, {
      username: authValue.username,
      password: authValue.password,
    });
  }, [authValue]);
  return (
    <section>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default Registration;
