import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { IUser } from "./components/types/types";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <Card variant={CardVariant.outlined} width="280px" height="280px">
        <button>Click</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
