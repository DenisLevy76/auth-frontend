import { ButtonComponent } from '../ButtonComponent'
import { ContainerComponent } from '../ContainerComponent'
import { InputComponent } from '../InputComponent'
import { FormRegister, H1Component } from './styles'

export const RegisterFormComponent = () => (
  <ContainerComponent bgColor='#3e66ff'>
    <FormRegister action="">
      <H1Component>Registrar</H1Component>
      <InputComponent id="fullName" labelText="Nome completo" required type="text" variant='dark' placeholder="João da silva" labelColor='#e2eaff'/>
      <InputComponent id="CPF" labelText="CPF" required type="numeric" variant='dark' labelColor='#e2eaff' placeholder="123.456.789-10"/>
      <InputComponent id="RG" labelText="RG" required type="numeric" variant='dark' labelColor='#e2eaff' placeholder="1234567"/>
      <InputComponent id="cellphone" labelText="Celular" type="numeric" variant='dark' labelColor='#e2eaff' placeholder="(12) 91324-1234"/>
      <InputComponent id="email" labelText="Email" type="email" variant='dark' labelColor='#e2eaff' placeholder="exemplo@exemplo.com"/>
      <InputComponent id="birthday" labelText="Data de nascimento" required type="date" variant='dark' labelColor='#e2eaff' placeholder="12/12/2012"/>
      <InputComponent id="password" labelText="Senha" required type="text" variant='dark' labelColor='#e2eaff'/>
      <ButtonComponent textLabel="Registrar" bgcolor='white' color='#3e66ff' variant='dark' labelColor='#e2eaff'/>
    </FormRegister>
  </ContainerComponent>
)