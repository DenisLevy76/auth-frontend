import { ContainerComponent } from '../../components/ContainerComponent';
import { InputComponent } from '../../components/InputComponent';

export const HomePage = () => (
  <>
    <ContainerComponent>
      <InputComponent labelText="E-Mail" id="input1"/>
      <InputComponent labelText="Senha" id="input1" type="password"/>
    </ContainerComponent>
  </>
)