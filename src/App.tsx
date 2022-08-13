import './styles/colors.css'
import "./App.css";

import useNvimPlugins from "./hooks/useNvimPlugins";
import Heading from './Heading';
import Plugin from './Plugin';

function App() {
  const [loading, data] = useNvimPlugins();

  if (loading) {
      return (
      <div className='App'>
      <div>Loading...</div>
      </div>
      )
    }
  return (
    <div className="App">
      {Object.entries(data).map(
        (
          [category, plugins],
          i: number
        ) => {
          return (
            <Heading key={i} title={category}>
              {plugins.map((plugin) => {
                return <Plugin key={plugin.gh} title={plugin.gh} desc={plugin.desc}></Plugin>
              })}
            </Heading>
          );
        }
      )}
    </div>
  );
}

export default App;
