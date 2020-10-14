// core
import React, { useState } from "react";

// components
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import HumansList from "./components/HumansList";
import AddItem from "./components/AddItem";

// assets
import "./Home.scss";


let maxId = 100;
export const Home = () => {

    const createHumansItem = label => {
        return {id: maxId++, label, done: false, important: false};
    };

    const humansDataArray = [
        createHumansItem("Mike"),
        createHumansItem("Robert"),
        createHumansItem("Andrey"),
        createHumansItem("Georg")
    ];

    const [humansData, setHumansData] = useState(humansDataArray);
    const [term, setTerm] = useState("");

    const deleteItem = id => {
        const idx = humansData.findIndex(el => el.id === id);
        const newArray = [...humansData.slice(0, idx), ...humansData.slice(idx + 1)];
        setHumansData(newArray);
    };

    const addItem = label => {
        if (label.length <= 0) return;
        maxId++;
        const newItem = createHumansItem(label);
        const newArray = [...humansData, newItem];
        setHumansData(newArray);
    };

    const toggleProperty = (array, id, propName) => {
        const idx = array.findIndex(el => el.id === id);
        const oldArray = array[idx];
        const newItem = {...oldArray, [propName]: !oldArray[propName]};
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


    const searchItem = (items, term) =>
        items.filter(
            item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
    const visibleItems = searchItem(humansData, term);

    return (
        <div className="humansApp">
            <AppHeader humans={countHumans} />
            <div className="top-panel d-flex">
                <SearchPanel term={term} setTerm={setTerm} />
            </div>
            <HumansList
                humansData={visibleItems}
                onDeleted={deleteItem}
                setHumansData={setHumansData}
                onToggleDoneItem={onToggleDoneItem}
                onToggleImportantItem={onToggleImportantItem} />
            <AddItem addItem={addItem} />
        </div>
    );
};