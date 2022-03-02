import { useSelector} from "react-redux";
import { addCash, payCash } from "./store/Modules/counter/action";
import { useDispatch } from "react-redux";
const App=()=> {
  const value = useSelector((store)=> store.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>{value}</div>
      <div>
        <button onClick={()=> dispatch(addCash(1))}>Receber</button>
        <button onClick={()=> dispatch(payCash(1))}>Pagar</button>
      </div>
    </>
  );
}

export default App;
