import "./App.css";
import Local from "./Component/Local";
import Tempo from "./Component/Tempo";
import Previsao from "./Component/Previsao";
function App() {
  return (
    <div>
      <div className="box">
        <div>
          <Tempo />
        </div>
<div><Previsao/></div>
        <div>
          <Local />
        </div>
      </div>
    </div>
  );
}

export default App;
