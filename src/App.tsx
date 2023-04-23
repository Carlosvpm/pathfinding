import "./App.css";
import { Pathfinding } from "./Pathfinding";

function App() {
  return (
    <div className="App">
      <Pathfinding />
      <div>
        <div>
          <tr>
            <td className="node finish-node "></td> <td>Hobbers</td>
          </tr>
        </div>
        <p></p>
        <div>
          <tr>
            <td className="node start-node"></td> <td>Coops</td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default App;
