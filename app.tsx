import React from "react";

interface AppProps {
  title: string;
}

const App = ({ title }: AppProps): JSX.Element => {
  return <h1>{title}</h1>;
};

export default App;
