
import './App.css';
import DisplayData from'./component/getapi/DisplayData';
import Form from'./component/postapi/Form';
import ToastMessage from'./component/toastMessage/ToastMessage';
const App=()=> {
  return (
    <div className="App">
     <DisplayData/>
     <ToastMessage/>
     <Form/>
    </div>
  );
}

export default App;
