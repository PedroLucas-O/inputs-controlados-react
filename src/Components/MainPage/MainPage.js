import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [name , setName] = useState ('')
  const [age , setAge ] = useState ('')
  const [email , setEmail] = useState ('')
  const [formulario , setFormulario] = useState ({})

  const changeName = (event) => {
    setName (event.target.value)
  };

  const changeAge = (event) => {
    setAge (event.target.value)
  };

  const changeEmail = (event) => {
    setEmail (event.target.value)
  };

  const enviarDados = (event) => {
    event.preventDefault ()
    const formulario = {
      name:name,
      age:age, 
      email:email
    }
    setFormulario (formulario)
    
    console.log (formulario)
    setName ('')
    setAge ('')
    setEmail ('')
  }; 

  
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Name: <Input value = {name} onChange = {changeName} />
        </label>
        <label>
          Age: <Input value = {age} onChange = {changeAge}/>
        </label>
        <label>
          E-Mail: <Input value = {email} onChange = {changeEmail}/>
        </label>

        <button onClick={enviarDados}>Enviar Dados</button>
      </Form> 
    
    </MainContainer>
  )
}

export default MainPage
