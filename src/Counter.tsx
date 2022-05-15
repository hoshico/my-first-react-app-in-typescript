import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);
  
  const increment = () => {
    setValue(value => value + 1 )
  }; 
  const decrement = () => {
    setValue(value => value - 1 )
  }; 
  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default Counter;