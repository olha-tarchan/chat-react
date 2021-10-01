import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import './styles.css';
import {firebase} from './config/firebase-config';
import {mockData} from './service/mockData';
import AppRouter from "./components/AppRouter";
import Context from "./context";
import {sortData} from './utils/sortData';

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [data, setData] = useState(mockData);
  const [dataChatRoom, setDataChatRoom] = useState(data[0]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);


  useEffect(() => {
    if (!localStorage.getItem("dataChatReenbit")) {
      const dataAfterSorting = sortData(data);
      localStorage.setItem("dataChatReenbit", JSON.stringify(dataAfterSorting));
      setData(dataAfterSorting);
      setDataChatRoom(dataAfterSorting[0]);
      setSearchResult(dataAfterSorting)
    } else {
      const fromLocalStorage = JSON.parse(localStorage.getItem("dataChatReenbit"));
      setData(fromLocalStorage);
      setDataChatRoom(fromLocalStorage[0]);
      setSearchResult(fromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const dataAfterSorting = sortData(data);
    localStorage.setItem("dataChatReenbit", JSON.stringify(dataAfterSorting));

    if(search !== '') {
      const newContactList = data.filter((c) => {
        return c.name.replace(/\s+/g, '').toLowerCase().includes(search.replace(/\s+/g, '').toLowerCase() )
      });
      setSearchResult(newContactList)
    } else {
      setSearchResult(data);
    }
  }, [data, dataChatRoom, search]);

  const openChatRoom = (dataForm) => {
    setDataChatRoom(dataForm);
  }

  const sendMessage = (formData) => {
    const newData = [...data];
    newData.map(e => {
      if (e.id === formData.id) {
        e.data.push({
          incoming: false,
          createdAt: Date.now(),
          message: formData.message
        })
      }
    })
    const dataAfterSorting = sortData(newData)
    setData(dataAfterSorting);
    localStorage.setItem("dataChatReenbit", JSON.stringify(dataAfterSorting));
  };

  const handlerSearch = (dataSearch) => {
    setSearch(dataSearch);
  }
  return (
      <BrowserRouter>
        <Context.Provider value={{
          firebase,
          auth,
          firestore,
          sendMessage,
          openChatRoom,
          dataChatRoom,
          search,
          handlerSearch,
          searchResult
        }}>
          <div className="container">
            <div className="row">
              <AppRouter/>
            </div>
          </div>
        </Context.Provider>,

      </BrowserRouter>
  );
}

export default App;
