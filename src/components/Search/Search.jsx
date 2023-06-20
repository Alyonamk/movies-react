import { Form, Input, Btn } from './Search.styled';

export const SearchMovie = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />
      <Btn type="submit">Search</Btn>
    </Form>
  );
};
