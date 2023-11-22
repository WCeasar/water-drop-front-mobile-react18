import { useQuery } from '@apollo/client';
import { GET_OSS_INFO } from '../graphql/oss';

export const useUploadOsSS = () => {
  // 1. 获取到签名信息

  // 2. fetch post 请求把参数传到服务端
  const { data: d } = useQuery(GET_OSS_INFO);

  const uploadHandler = async (file: File) => {
    const formData = new FormData();

    const data = d.getOssInfo;

    const key = `images/${file.name}`;
    formData.append('key', key);
    formData.append('policy', data.policy);
    formData.append('OSSAccessKeyId', data.accessId);
    formData.append('success_action_status', '200');
    formData.append('signature', data.signature);
    formData.append('file', file);

    const res = await fetch(data.host, {
      method: 'POST',
      body: formData,
    });
    console.log('🚀 ~ file: useUploadOss.ts:24 ~ uploadHandler ~ res:', res);

    return { url: res.url + key };
  };

  return uploadHandler;
};
