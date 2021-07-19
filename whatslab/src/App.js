import React from 'react';
import styled from 'styled-components';
import Input from './Components/Input'

const Aplicativo = styled.div`
  height: 95vh;
  width: 800px;
  display: flex;
  flex-direction: column-reverse;
  margin: 20px auto;
  background-color: #E5DDD6;
  border-radius: 5px;
  box-shadow: 0 0 5px;
`

class App extends React.Component {
  render() {
    return (
      <Aplicativo>
        <Input />
      </Aplicativo>
    );
  }
}

export default App;