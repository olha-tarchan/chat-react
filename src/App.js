import React, {useState,useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import './styles.css';
import { firebase } from './config/firebase-config';
import {mockData} from './service/mockData';
import AppRouter from "./components/AppRouter";
import Context from "./context";

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [data, setData] = useState(mockData);

  const [dataChatRoom, setDataChatRoom] = useState(data[0]);

  const sortData = (e) => {
    const sortData = [...e];
    return sortData.sort((a,b) =>  b.data[ b.data.length - 1].createdAt - a.data[ a.data.length - 1].createdAt )
  }

  useEffect(() => {
    if( !localStorage.getItem("dataChatReenbit") ){
      const dataNew = sortData(data);
      localStorage.setItem("dataChatReenbit", JSON.stringify(dataNew) );
      setData(dataNew);
      setDataChatRoom(dataNew[0])
    } else {
      const fromLocalStorage = JSON.parse(localStorage.getItem("dataChatReenbit"));
      setData(fromLocalStorage);
      setDataChatRoom(fromLocalStorage[0])
    }
  }, []);

  useEffect(()=>{
    const dataNew = sortData(data);
    localStorage.setItem("dataChatReenbit", JSON.stringify(dataNew) );
  }, [data, dataChatRoom])


  const openChatRoom = (dataForm) => {
    setDataChatRoom(dataForm);
  }

  const sendMessage =  (formData) => {
    const newData = [...data];

    newData.map(e => {
      if( e.id === formData.id) {
        e.data.push({
          incoming:false,
          createdAt: Date.now(),
          message: formData.message
        })
      }
    })
    setData(newData);
    localStorage.setItem("dataChatReenbit", JSON.stringify(newData) );
  };

  return (
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <Context.Provider value={{
              data,
              firebase,
              auth,
              firestore,
              sendMessage,
              openChatRoom,
              dataChatRoom

            }}>
              <AppRouter />
            </Context.Provider>,
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
