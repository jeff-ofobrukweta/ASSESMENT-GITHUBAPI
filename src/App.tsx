import IndexRouter from "./routes/index";
import "./App.css";

const App = (props: any) => {
  return (
    <div className="App">
      <div className="top-barner">
        <h1 className="trends-header">Trending</h1>
        <p className="trends-text">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <IndexRouter />
    </div>
  );
};

export default App;
