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
  // non-null assertion operator
  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    // focusが呼び出せる時だけ呼ばれる(nullじゃないとき)
    ref.current.focus();
  }

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component war re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </>
  );
};

export default Counter;