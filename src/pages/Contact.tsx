import { Button, Form, Input } from "antd";
import React from "react";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

export const Contact: React.FC = () => (
    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
        <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter the first name" }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter the last name" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter the email" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item label="Object" name="object" rules={[{ required: true }]}>
            <Input />
        </Form.Item>

        <Form.Item label="Message" name="message" rules={[{ required: true }]}>
            <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
