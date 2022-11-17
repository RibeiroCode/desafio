import React, { useState } from "react";
import "./styles";
import Input from "../../components/Input";

const UserForm = () => {
  const [name] = useState("");
  const [password] = useState("");
  const [passwordConfirm] = useState("");


  function getUser() {
    return {
      name: name,
        password: password,
    };
  };

  return (
    <div>
      <main>
        
        <Input
        name= "name"
        password= "password"
        label = "label"
        />

        
          
        

      </main>
    </div>
  );
};

export default UserForm;
