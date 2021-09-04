
import './App.css';
import PricingTable from './Components/PricingTable';

function App() {

  let pricingTableObj ={
    freePrice : "0",
    plusPrice : "39",
    proPrice : "59",
    freeUsers : "5",
    plusUsers : "25",
    proUsers : "Unlimited",
    freeStorage : "25",
    plusStorage : "500",
    proStorage : "Unlimited",
    freeButton : "Try Free",
    plusButton : "Try Plus",
    proButton : "Try Pro"
  }

  return (
    <div className="container my-5">
      <PricingTable pricingObj = {pricingTableObj}/>
    </div>
  );
}

export default App;
