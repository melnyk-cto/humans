// core
import React, { useState } from "react";

// library
import { useDispatch, useSelector } from "react-redux";

// components
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import HumansList from "./components/HumansList";
import AddItem from "./components/AddItem";
import { humansActions } from "../../../bus/humans/actions";
import { getHumans } from "../../../bus/humans/selectors";

// assets
import "./Home.scss";


let maxId = 100;
export const Home = () => {
    const dispatch = useDispatch();
    const humansData = useSelector(getHumans);
    const [term, setTerm] = useState("");

    const createHumansItem = label => {
        if (humansData[humansData.length - 1] === undefined) {
            return {id: maxId++, label};

        } else {
            return {id: (humansData[humansData.length - 1].id + 1), label};
        }
    };

    const deleteItem = id => {
        const idx = humansData.findIndex(el => el.id === id);
        const newArray = [...humansData.slice(0, idx), ...humansData.slice(idx + 1)];

        dispatch(humansActions.setHumans(newArray));
        localStorage.setItem('humans', JSON.stringify(newArray));
    };

    const addItem = label => {
        if (label.length <= 0) return;
        maxId++;
        const newItem = createHumansItem(label);
        const newArray = [...humansData, newItem];

        dispatch(humansActions.setHumans(newArray));
        localStorage.setItem('humans', JSON.stringify(newArray));
    };

    const toggleProperty = (array, id, propName) => {
        const idx = array.findIndex(el => el.id === id);
        const oldArray = array[idx];
        const newItem = {...oldArray, [propName]: !oldArray[propName]};
        const newArray = [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];

        dispatch(humansActions.setHumans(newArray));
        localStorage.setItem('humans', JSON.stringify(newArray));
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
                onToggleDoneItem={onToggleDoneItem}
                onToggleImportantItem={onToggleImportantItem} />
            <AddItem addItem={addItem} />
        </div>
    );
};