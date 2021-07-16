import React from 'react';
import styled from 'styled-components';




const Aplicativo = styled.div`
  height: 95vh;
  width: 800px;
  display: flex;
  flex-direction: column-reverse;
  margin: 10px auto;
  background-color: #E5DDD6;
  border-radius: 5px;
  box-shadow: 0 0 3px;
`



class App extends React.Component {
  render() {
    return (
      <Aplicativo>
        {/* Aqui vai colocar o "<input>" */}
      </Aplicativo>
    );
  }
}
  

export default App;