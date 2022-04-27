import { ButtonComponent } from "../ButtonComponent";
import { ContainerComponent } from "../ContainerComponent";
import { InputComponent } from "../InputComponent";
import { FormularioLogin, TextoLogin } from "./styles";
import {Link} from 'react-router-dom';
import { useState } from "react";

export const LoginComponent = () => {

    function mostrar(e) {
        e.preventDefault()
        console.log(CPF)
        console.log(senha)
    }

    const [CPF, setCPF] = useState()
    const [senha, setSenha] = useState()

    return (

        <ContainerComponent>
            <FormularioLogin onSubmit={mostrar}>
                <TextoLogin>Log in</TextoLogin>

                <InputComponent 
                id="CPF" 
                onChange={(e) => setCPF(e.target.value)}
                labelText="CPF" 
                placeholder="digite seu CPF" 
                type="text"
                />

                <InputComponent 
                id="password" 
                onChange={(e) => setSenha(e.target.value)}
                labelText="Senha" 
                placeholder="digite sua Senha" 
                type="password"
                />

                <ButtonComponent textLabel="Entrar"/>
                <Link to="/register">
                    <ButtonComponent textLabel="Não possui conta? Cadastrar-se" bgcolor="transparent" color="#6a6490"/>
                </Link>
            </FormularioLogin>
        </ContainerComponent>
    )
}
