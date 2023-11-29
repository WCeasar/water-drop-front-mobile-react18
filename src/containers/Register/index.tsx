import { useState, useEffect } from 'react';
import { Button, Form, Input, Toast } from 'antd-mobile';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';
import { REGISTER } from '../../graphql/auth';

/**
 * 注册页面
 */
const Register = ({}) => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);

  const nav = useNavigate();

  interface IValues {
    account: string;
    password: string;
  }

  const [register] = useMutation(REGISTER);

  const onFinish = async (values: IValues) => {
    const res = await register({
      variables: {
        account: values.account,
        password: values.password,
      },
    });

    console.log('register', res.data);

    if (res.data.studentRegister.code === 200) {
      Toast.show({
        icon: 'success',
        content: res.data.studentRegister.message,
      });
      nav('/login');
    } else {
      Toast.show({
        icon: 'fail',
        content: res.data.studentRegister.message,
      });
    }
  };
  return (
    <div className={style.container}>
      <Form
        onFinish={onFinish}
        layout="horizontal"
        mode="card"
        footer={
          <Button block type="submit" color="primary" size="large">
            注册
          </Button>
        }
      >
        <Form.Header>
          <img
            src="https://water-drop-assets-wang.oss-cn-shanghai.aliyuncs.com/images/henglogo.png"
            alt=""
            className={style.logo}
          />
        </Form.Header>
        <Form.Item
          label="账号"
          name="account"
          rules={[
            { required: true, message: '账号不能为空' },
            { pattern: /^[A-Za-z]{6,10}$/, message: '英文，长度不少于 6 个' },
          ]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '密码不能为空' },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: '英文，长度不少于 6 个',
            },
          ]}
        >
          <Input placeholder="请输入密码" type="password" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="rePassword"
          dependencies={['password']}
          rules={[
            { required: true, message: '密码不能为空' },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: '英文，长度不少于 6 个',
            },
            ({ getFieldValue }) => ({
              validator: (_, value) => {
                if (value !== getFieldValue('password')) {
                  return Promise.reject(new Error('两次密码不一致'));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input placeholder="请再次输入密码" type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
