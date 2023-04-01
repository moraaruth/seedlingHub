import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/farmers")
      .then((r) => r.json())
      .then((farmers) => console.log(farmers));
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;