import { useMutation } from '@apollo/client';
import { Button, Form, Input, ImageUploader } from 'antd-mobile';

import { useEffect } from 'react';

import styles from './App.module.less';
import { UPDATE } from './graphql/demo';
import { useUploadOsSS } from './hooks/useUploadOSS';

const App = () => {
  const uploadHandler = useUploadOsSS();

  useEffect(() => {
    document.documentElement.setAttribute('data-prefers-color-scheme', 'dark');
  }, []);

  const [update] = useMutation(UPDATE);

  const handleSubmit = (v: any) => {
    const { name, desc } = v;
    console.log(
      '🚀 ~ file: App.tsx:18 ~ handleSubmit ~ name, desc:',
      name,
      desc,
    );

    update({
      variables: {
        id: '21dac973-9aee-4662-aea2-8278be59ba94',
        params: {
          name,
          desc,
        },
      },
    });
  };

  useUploadOsSS();
  return (
    <div className={styles.container}>
      <Form
        onFinish={handleSubmit}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
        layout="horizontal"
      >
        <Form.Item name="name" label="姓名">
          <Input />
        </Form.Item>

        <Form.Item name="desc" label="描述">
          <Input />
        </Form.Item>

        <Form.Item name="ac" label="描述">
          <ImageUploader upload={uploadHandler} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
