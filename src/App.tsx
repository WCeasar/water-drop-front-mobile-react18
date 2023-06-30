import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import { FIND, UPDATE } from './graphql/demo';

const App = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const { data, loading } = useQuery(FIND, {
    variables: {
      id: '21dac973-9aee-4662-aea2-8278be59ba94',
    },
  });

  const onNameInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDescInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const [update] = useMutation(UPDATE);

  const handleSubmit = () => {
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
  return (
    <>
      <p>{JSON.stringify(data)}</p>
      <p>{`${loading}`}</p>

      <p>
        <input type="text" onChange={onNameInputChangeHandler} />
      </p>

      <p>
        <input type="text" onChange={onDescInputChangeHandler} />
      </p>

      <p>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          提交
        </button>
      </p>
    </>
  );
};

export default App;
