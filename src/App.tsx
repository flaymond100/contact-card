import React, { useEffect, useMemo, useState } from 'react';
import { InfoCard } from "./components/InfoCard";
import { Loadable } from "./components/Loadable";
import axios from "axios";

export interface User {
  firstName: string;
  lastName: string;
}

function App() {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean>(false);
  const loading = useMemo(() => Boolean(!user), [user]);

  useEffect(() => {
    setTimeout(() =>
        axios.get('mockUpData/data.json')
        .then(({data}) => setUser(data))
            .catch(() => setError(true)),
        3000)
  },[])

  if (error) return <h1>Ooooops....</h1>

  return (
      <Loadable loading={loading}>
        <InfoCard user={user} />
      </Loadable>
  );
}

export default App;
