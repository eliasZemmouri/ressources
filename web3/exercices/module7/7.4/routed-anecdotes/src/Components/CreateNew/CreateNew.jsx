import { useState } from "react"

import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom"


const CreateNew = (props) => {
  
  
    const navigate = useNavigate();
    
    const onFinish = (values) => {
      console.log('Success:', values.content);    
      props.addNew({
        content: values.content,
        author: values.author,
        info:values.info,
        votes: 0
      })
      navigate('/')
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
  
    return (

      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please input the content!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[
          {
            required: true,
            message: 'Please input the author!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Info"
        name="info"
        rules={[
          {
            required: true,
            message: 'Please input the url!',
          },
        ]}
      >
        <Input />
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

    )
  
  }

  export default CreateNew;