import "./App.css";
import React from "react";
const tg = window.Telegram.WebApp;
function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div className="App">
      <button onClick={() => tg.close()}>Закрыть</button>
    </div>
  );
}

export default App;
