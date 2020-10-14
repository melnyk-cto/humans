import React, { useState } from "react";

// Если "import" ссылается на папку а не на файл то Webpack автоматически будет искать там файл "index.js"
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import HumansList from "../HumansList";
import AddItem from "../AddItem";

import "./App.scss";

let maxId = 100;

const createHumansItem = label => {
  return { id: maxId++, label, done: false, important: false };
};

const humansDataArray = [
  createHumansItem("Mike"),
  createHumansItem("Robert"),
  createHumansItem("Andrey"),
  createHumansItem("Georg")
];

// Один компонент - один файл
// Все компоненты должны быть в папке "components"
const App = () => {
  const [humansData, setHumansData] = useState(humansDataArray);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, done

  const deleteItem = id => {
    const idx = humansData.findIndex(el => el.id === id);
    const newArray = [...humansData.slice(0, idx), ...humansData.slice(idx + 1)];
    // НЕЛЬЗЯ! изменять существующий state, то есть прямой запис setHumansData([...humansData.slice(0, id), ...humansData.slice(id + 1)]) не верный!;
    setHumansData(newArray);
  };

  const addItem = label => {
    if (label.length <= 0) return;

    maxId++;
    const newItem = createHumansItem(label);

    // Добавить новый елемент в вначало масива (const newArray = [newItem, ..humansData]) или в конец:
    const newArray = [...humansData, newItem];

    // array.push() - изменение масива которое возвращает длину масива. НЕЛЬЗЯ применять на масивах из "state"
    setHumansData(newArray);
  };

  const toggleProperty = (array, id, propName) => {
    const idx = array.findIndex(el => el.id === id);
    const oldArray = array[idx];
    const newItem = { ...oldArray, [propName]: !oldArray[propName] };
    const newArray = [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
    setHumansData(newArray);
  };
  const onToggleDoneItem = id => {
    toggleProperty(humansData, id, "done");
  };
  const onToggleImportantItem = id => {
    toggleProperty(humansData, id, "important");
  };

  const countDone = humansData.filter(item => item.done).length;
  const countHumans = humansData.length - countDone;

  const filterItems = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  };

  const searchItem = (items, term) =>
    items.filter(
      item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    );

  const visibleItems = filterItems(searchItem(humansData, term), filter);

  return (
    <div className="humansApp">
      <AppHeader humans={countHumans} done={countDone} />
      <div className="top-panel d-flex">
        <SearchPanel term={term} setTerm={setTerm} />
        <ItemStatusFilter filter={filter} setFilter={setFilter} />
      </div>
      <HumansList
        humansData={visibleItems}
        onDeleted={deleteItem}
        setHumansData={setHumansData}
        onToggleDoneItem={onToggleDoneItem}
        onToggleImportantItem={onToggleImportantItem}
      />
      <AddItem addItem={addItem} />
    </div>
  );
};

export default App;
