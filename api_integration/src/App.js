
import './App.css';
import DisplayData from'./component/getapi/DisplayData';
import Form from'./component/postapi/Form';
import ToastMessage from'./component/toastMessage/ToastMessage';
import { Provider } from 'react-redux'
import store from './component/redux/store';
import UsersContainer from'./component/UsersContainer';
const App=()=> {
  return (
    <div className="App">
     <DisplayData/>
     <ToastMessage/>
     <Form/>

     <Provider store={store}>
        <UsersContainer />
        </Provider>
    </div>
  );
}

export default App;
