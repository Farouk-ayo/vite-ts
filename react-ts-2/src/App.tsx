import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

const App = () => {
  // const [count, setCount] = useState<User[] | null>(null);
  // or using assertion
  // const [count, setCount] = useState<User>({} as User);
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  // if(!inputRef.current)
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users:", users);
    return () => console.log("UnMOunting");
  }, [users]);

  // const addTwo = useCallback((e:MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount((prev) => prev + 1), []);

  const addTwo = useCallback((): void => {
    setUsers({ id: 1, username: "farouk" });
    setCount((prev) => prev + 2);
  }, []);

  const result = useMemo(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
};
export default App;
