import React, { useState } from "react";

const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Click me: {count}</button>;
};

export default Button;
