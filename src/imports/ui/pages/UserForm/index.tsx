import React, { useState } from "react";
import "./styles.css"

import { ReactElement } from "react";
import api from "../../../../services/api";


function UserForm(): ReactElement {

  const [name, setName] = useState('');
  const [password, setAvatar] = useState('');
  const [passwordConfirm, setBio] = useState('');
  

  api.post('classes', {
    name,
    password,
    passwordConfirm,
  }) /*.then(() => {
    alert('Cadastro realizado com sucesso!');

    history.push('/');
  }).catch(() => {
    alert('Erro no cadastro.');
  })*/ ;


  return (
    <div>
      <main>
        
  

        
          
        

      </main>
    </div>
  );
};

export default UserForm;
