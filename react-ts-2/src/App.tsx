import { useEffect, useState } from "react";
interface User {
  id: number;
  username: string;
}

const App = () => {
  // const [count, setCount] = useState<User[] | null>(null);
  // or using assertion
  // const [count, setCount] = useState<User>({} as User);
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
  }, []);

  return <div>App</div>;
};
export default App;
