import { ButtonComponent } from "../ButtonComponent";
import { ContainerComponent } from "../ContainerComponent";
import { InputComponent } from "../InputComponent";
import { FormularioLogin, TextoLogin } from "./styles";
import {Link} from 'react-router-dom';

export const LoginComponent = () => (
   <ContainerComponent>
        <FormularioLogin>
            <TextoLogin>Log in</TextoLogin>
            <InputComponent id="CPF" labelText="CPF" placeholder="digite seu CPF" type="text"/>
            <InputComponent id="password" labelText="Senha" placeholder="digite sua Senha" type="text"/>
            <ButtonComponent textLabel="Entrar"/>
            <Link to="/register">
                <ButtonComponent textLabel="Não possui conta? Cadastrar-se" bgcolor="transparent" color="#6a6490"/>
            </Link>
        </FormularioLogin>
    </ContainerComponent>
)