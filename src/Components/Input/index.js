import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { InputContainer, Container } from './styles';

function Input() {
  return(
    <>
      <Container>
        <FaSearch color="#787878" style={{ marginRight: 6, marginLeft: 4 }} />
        <InputContainer placeholder={'Busque por um produto...'} />
      </Container>
    </>
  );
}

export default Input;
