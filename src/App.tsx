import "./App.css";
import useNvimPlugins from "./hooks/useNvimPlugins";

function App() {
  const data = useNvimPlugins();

  return (
    <div className="App">
      {Object.entries(data).map(
        (
          [category, plugins],
          i: number
        ) => {
          return (
            <h2 key={i}>
              {category}
              <ul>
                {plugins.map((plugin) => {
                  return <h6 key={plugin.gh}>{plugin.gh}</h6>;
                })}
              </ul>
            </h2>
          );
        }
      )}
    </div>
  );
}

export default App;
