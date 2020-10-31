import React, { useEffect, useState } from "react";
import api from "./services/api";

import User from "./components/User";

interface IUser {
  name: string;
  email?: string;
}

function App() {
  // use state com aray do tipo iUser
  const [users, setUsers] = useState<IUser[]>([]);

  // carregar dados assim que componente for carregado em tela
  useEffect(() => {
    api.get<IUser[]>("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
       <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
