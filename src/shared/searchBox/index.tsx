import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IValues {
  query: string
}

const defaultValues: IValues = {
  query: '',
};

const SearchBox = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    defaultValues,
  });
  const onSubmit = ({ query }: IValues) => {
    router.push(`/photos/${query}`);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('query')} />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  
`;

const Form = styled.form`
  
`;

const Input = styled.input`
  height: 40px;
  border-radius: 100px;
  border: 0;
  outline: none;
  padding: 18px;
`;

export default SearchBox;
