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
const API_URL = 'https://api.chucknorris.io/jokes/random';

function App() {
  const [data, setData] = useState(mockData);
  const [dataChatRoom, setDataChatRoom] = useState(data[0]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [joke, setJoke] = useState('');
  const [classLeftColumn, setClassLeftColumn] = useState('col_left')

  const generateJoke = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => setJoke(data.value));
  }

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("dataChatJokes")) || sortData(data);
    setData(dataFromLocalStorage);
    setDataChatRoom(dataFromLocalStorage[0]);
    setSearchResult(dataFromLocalStorage);
    generateJoke();
  }, []);


  useEffect(() => {
    const dataAfterSorting = sortData(data);
    localStorage.setItem("dataChatJokes", JSON.stringify(dataAfterSorting));
    if(search !== '') {
      const newContactList = data.filter((c) => {
        return c.name.replace(/\s+/g, '').toLowerCase().includes(search.replace(/\s+/g, '').toLowerCase() )
      });
      setSearchResult(newContactList)
    } else {
      setSearchResult(data);
    }
  }, [data, dataChatRoom, search]);

  const changeClassForLeftPanel = (data) => {
    setClassLeftColumn(data);
  }
  const openChatRoom = (dataForm) => {

    setDataChatRoom(dataForm);
    changeClassForLeftPanel('col_left active')
  }
  const handlerSearch = (dataSearch) => {
    setSearch(dataSearch);
  }

  const sendMessage = (formData) => {
    if(formData.message.trim().length < 1 ){
      return false;
    }
    const newData = [...data];

    newData.map(e => {
      if (e.id === formData.id) {
        e.data.push({
          incoming: false,
          createdAt: Date.now(),
          message: formData.message
        })
      }
      return e;
    })
    const dataAfterSorting = sortData(newData)
    setData(dataAfterSorting);
    localStorage.setItem("dataChatJokes", JSON.stringify(dataAfterSorting));
    generateJoke();
    setTimeout(() => {
          responseMessage(formData.id)
    }, 1500);
    clearTimeout(1500)
  };

 const responseMessage = (id) => {const newData = [...data];
    newData.map(e => {
      if (e.id === id) {
        e.data.push({
          incoming: true,
          createdAt: Date.now(),
          message: joke
        });
      }
      return e;
    })
    const dataAfterSorting = sortData(newData)
    setData(dataAfterSorting);
    localStorage.setItem("dataChatJokes", JSON.stringify(dataAfterSorting));
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
          searchResult,
          classLeftColumn,
          changeClassForLeftPanel
        }}>
          <div className="container" >
            <div className="row">
              <AppRouter/>
            </div>
          </div>
        </Context.Provider>,

      </BrowserRouter>
  );
}

export default App;
