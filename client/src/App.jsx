import './App.css';
import Datafetch from './components/Datafetch/index'
import useCaculator from './components/UseCalculator';
import UseFetch from './components/UseFetch/UseFetch';

function App() {

  const caculator=useCaculator()

  return (
    <div className="App">
      <Datafetch/>
      <UseFetch/>


      <div>
        <p>{caculator.result}</p>
        {/* inputun value yazilmasa da isleyer */}
        <input type="number" value={caculator.num1} onChange={caculator.handleNum1}/>
        <input type="number" value={caculator.num2} onChange={caculator.handleNum2}/>

        <button onClick={caculator.Topla}>+</button>
        <button onClick={caculator.Cixma}>-</button>
        <button onClick={caculator.Vurma}>*</button>
        <button onClick={caculator.Bolme}>/</button>
      </div>

    </div>
  );
}

export default App;
