import React, { useEffect, useRef, useState } from 'react';


const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue(value => value + 1 )
  }; 
  const decrement = () => {
    setValue(value => value - 1 )
  }; 


  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component war re-rendered {renderTimes.current} times!</div>
    </>
  );
};

export default Counter;