import './App.css'
import { ListComponent } from './components/ListComponent'
import { useState } from 'react'


function App() {
  const [items, setItems] = useState([]);

    const addItem = () => {
        let id = items.length + 1;
        let item = {id: id, name:'item'};
        setItems([...items, item]);
    };

    const deleteItem = () => setItems([]);
  
  return (
    <ListComponent 
      list={items.map((item) => <p key={item.id}>{item.name}{item.id}</p> )}
      addItem={addItem}
      deleteItem={deleteItem}
      />
  )
}
export default App
