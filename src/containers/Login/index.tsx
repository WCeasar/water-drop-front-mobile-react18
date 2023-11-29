import { useState, useEffect } from 'react';
import { Button, Form, Input, Toast } from 'antd-mobile';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import style from './index.module.less';
import { LOGIN } from '../../graphql/auth';

/**
 * 注册页面
 */
const Login = ({}) => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);

  interface IValues {
    account: string;
    password: string;
  }

  const nav = useNavigate();

  const [login] = useMutation(LOGIN);

  const onFinish = async (values: IValues) => {
    const res = await login({
      variables: {
        account: values.account,
        password: values.password,
      },
    });

    if (res.data.studentLogin.code === 200) {
      Toast.show({
        icon: 'success',
        content: res.data.studentLogin.message,
      });
      nav('/');
    } else {
      Toast.show({
        icon: 'fail',
        content: res.data.studentLogin.message,
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
            登录
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
      </Form>
    </div>
  );
};

export default Login;
