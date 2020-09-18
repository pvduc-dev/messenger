import React, { useEffect, useState } from 'react';

function Loading() {
  const [amount, setAmount] = useState(100)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAmount((prevState => prevState - 10))
    },100)
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full border border-indigo-600"
        style={{
          transition: 'all 200ms ease 0s',
          transform: `translate3d(-${amount}%, 0px, 0px)`,
        }}
      />
    </>
  );
}

export default Loading;
