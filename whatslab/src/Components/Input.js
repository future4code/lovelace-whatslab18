import React from 'react';
import styled from 'styled-components';

const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
`

const ContainerInput = styled.div`
    align-self: center;

    .InputUsuario {
        width: 100px;
        margin: 10px 10px;
        padding: 5px;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 2px;
    }

    .InputMensagem {
        width: 560px;
        margin: 10px 10px;
        padding: 5px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 2px;
    }

    > button {
        padding: 5px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 2px;
    }

    button:hover {
        cursor: pointer;
        background-color: #E5E5E5;
    }
`

const ContainerMensagem = styled.div`
    display: flex;
    align-items: center;
    margin: -10px 20px;
    > p {
        margin-left: 10px;
    }
`

class Input extends React.Component {
    state = {
        mensagens: [{
            usuario: '',
            mensagem: ''
        }],
        usuario: '',
        mensagem: ''
    }

    aoEnviar = () => {
        if (this.state.mensagem === '') {
            alert('Obrigatório escrever uma mensagem')
        } else if (this.state.usuario === '') {
            alert('Obrigatório o nome de usuário')
        } else {
            const novaMensagem = { usuario: this.state.usuario, mensagem: this.state.mensagem }
            this.setState({
                mensagens: [...this.state.mensagens, novaMensagem],
                usuario: '',
                mensagem: ''
            })
        }
        
    }

    onChangeUsuario = (event) => {
        this.setState({ usuario: event.target.value })
    }
    onChangeMensagem = (event) => {
        this.setState({ mensagem: event.target.value })
    }

    render() { // eslint-disable-next-line
        const listaMensagens = this.state.mensagens.map((objeto, index) => {
            if (index > 0) {
                return (
                    <ContainerMensagem key={index}>
                        <h4>{objeto.usuario}:</h4><p>{objeto.mensagem}</p>
                    </ContainerMensagem>
                )
            }
            
        })

        return (
            <ContainerGeral>
                {listaMensagens}
                <ContainerInput>
                    <input
                        className="InputUsuario"
                        value={this.state.usuario}
                        placeholder={'Usuário'}
                        onChange={this.onChangeUsuario}
                    />
                    <input
                        className="InputMensagem"
                        value={this.state.mensagem}
                        placeholder={'Mensagem'}
                        onChange={this.onChangeMensagem}
                    />
                    <button onClick={this.aoEnviar}>Enviar</button>
                </ContainerInput>
            </ContainerGeral>
        )
    }
}

export default Input