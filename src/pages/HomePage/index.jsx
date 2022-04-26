import { ButtonComponent } from '../../components/ButtonComponent';
import { InputComponent } from '../../components/InputComponent';

export const HomePage = () => (
  <>
    <InputComponent labelText="E-Mail" id="input1"/>
    <InputComponent labelText="Senha" id="input1" type="password"/>
    <ButtonComponent textLabel="Cadastra-se"/>
  </>
)