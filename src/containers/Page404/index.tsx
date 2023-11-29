import { useState, useEffect } from 'react';

import style from './index.module.less';

/**
 *  404
 */
const Page404 = ({}) => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return <div className={style.container}>Page404</div>;
};

export default Page404;
