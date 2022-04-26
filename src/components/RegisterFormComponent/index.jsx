import { ButtonComponent } from '../ButtonComponent'
import { ContainerComponent } from '../ContainerComponent'
import { InputComponent } from '../InputComponent'
import { FormRegister, H1Component } from './styles'

export const RegisterFormComponent = () => (
  <ContainerComponent bgColor='#3e66ff'>
    <FormRegister action="">
      <H1Component>Registrar</H1Component>
      <InputComponent id="fullName" labelText="Nome completo" required type="text" variant='dark' placeholder="João da silva"/>
      <InputComponent id="CPF" labelText="CPF" required type="number" variant='dark'/>
      <InputComponent id="RG" labelText="RG" required type="number" variant='dark'/>
      <InputComponent id="cellphone" labelText="Celular" type="number" variant='dark'/>
      <InputComponent id="email" labelText="Email" type="email" variant='dark'/>
      <InputComponent id="birthday" labelText="Data de nascimento" required type="date" variant='dark'/>
      <InputComponent id="password" labelText="Senha" required type="text" variant='dark'/>
      <ButtonComponent textLabel="Registrar" bgcolor='white' color='#3e66ff' variant='dark'/>
    </FormRegister>
  </ContainerComponent>
)