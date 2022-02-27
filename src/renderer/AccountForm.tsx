import 'antd/dist/antd.css';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export default function AccountForm() {
  const [form] = Form.useForm();
  const [account, setAccount] = useState('');
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onClick = () => {
    console.log(account);
  };

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const tailLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            offset: 10,
            span: 14,
          },
        }
      : null;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item
        name="authorization"
        label="Authorization: "
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={account}
          placeholder="Authorization Key"
          onChange={(e) => setAccount(e.target.value)}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={onClick}>
          Add Account
        </Button>
      </Form.Item>
    </Form>
  );
}
