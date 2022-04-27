import { ButtonComponent } from '../ButtonComponent'
import { ContainerComponent } from '../ContainerComponent'
import { InputComponent } from '../InputComponent'
import { FormRegister, H1Component } from './styles'
import { useState } from 'react';

export const RegisterFormComponent = () => {

  function teste(e){
    e.preventDefault()
    console.log(name)
    console.log(cpf)
    console.log(rg)
    console.log(telefone)
    console.log(email)
    console.log(nasc)
    console.log(senha)
  }

  const [name, setName] = useState()
  const [cpf, setCPF] = useState()
  const [rg, setRG] = useState()
  const [telefone, setTEL] = useState()
  const [email, setEmail] = useState()
  const [nasc, setNascimento] = useState()
  const [senha, setSenha] = useState()

  return (

  <ContainerComponent bgColor='#3e66ff'>
    <FormRegister action="post" onSubmit={teste}>

      <H1Component>Registrar</H1Component>

      <InputComponent 
      id="fullName" 
      labelText="Nome completo" 
      required type="text" 
      variant='dark' 
      placeholder="João da silva" 
      labelColor='#e2eaff'
      onChange={(e) => setName(e.target.value)}/>

      <InputComponent 
      id="CPF" 
      labelText="CPF" 
      required type="numeric" 
      variant='dark' labelColor='#e2eaff' 
      placeholder="123.456.789-10"
      onChange={(e) => setCPF(e.target.value)}
      />

      <InputComponent 
      id="RG" 
      labelText="RG" 
      required type="numeric" 
      variant='dark' 
      labelColor='#e2eaff' 
      placeholder="1234567"
      onChange={(e) => setRG(e.target.value)}
      />

      <InputComponent 
      id="cellphone" 
      labelText="Celular" 
      type="numeric" 
      variant='dark' 
      labelColor='#e2eaff' 
      placeholder="(12) 91324-1234"
      onChange={(e) => setTEL(e.target.value)}
      />

      <InputComponent 
      id="email" 
      labelText="Email" 
      type="email" 
      variant='dark' 
      labelColor='#e2eaff' 
      placeholder="exemplo@exemplo.com"
      onChange={(e) => setEmail(e.target.value)}
      />

      <InputComponent 
      id="birthday" 
      labelText="Data de nascimento" 
      required type="date" 
      variant='dark' 
      labelColor='#e2eaff' 
      placeholder="12/12/2012"
      onChange={(e) => setNascimento(e.target.value)}/>

      <InputComponent 
      id="password" 
      labelText="Senha" 
      required type="password" 
      variant='dark' 
      labelColor='#e2eaff'
      onChange={(e) => setSenha(e.target.value)}
      />

      <ButtonComponent 
      textLabel="Registrar" 
      bgcolor='white' 
      color='#3e66ff' 
      variant='dark' 
      labelColor='#e2eaff'
      />

    </FormRegister>
  </ContainerComponent>
  )
}