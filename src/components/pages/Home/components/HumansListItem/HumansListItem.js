// core
import React, { useState, useRef } from "react";

// components
import "./HumansListItem.scss";
import { humansActions } from "../../../../../bus/humans/actions";
import { useDispatch, useSelector } from "react-redux";
import { getHumans } from "../../../../../bus/humans/selectors";

const HumansListItem = ({
                            label,
                            onDeleted,
                            id
                        }) => {
    const dispatch = useDispatch();
    const humansData = useSelector(getHumans);

    let inputRef = useRef(null);

    const [value, setValue] = useState(label);
    const [activeDisabled, setActiveDisabled] = useState();

    const toggleProperty = (array, id, value) => {
        const idx = array.findIndex(el => el.id === id);
        const oldArray = array[idx];
        const newItem = {...oldArray, label: value};
        const newArray = [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];

        dispatch(humansActions.setHumans(newArray));
        localStorage.setItem('humans', JSON.stringify(newArray));
    };

    const handleBlur = () => {
        setActiveDisabled(false);
    };

    const onToggleEditItem = () => {
        setActiveDisabled(!activeDisabled);
    };
    const onToggleNoEditItem = () => {
        setActiveDisabled(false);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        toggleProperty(humansData, id, e.target.value);
    };

    return (
        <div className='humansListItem'>
            <input ref={el => inputRef = el} className="humansListItemLabel" value={value}
                   onChange={(e) => handleChange(e)}
                   disabled={!activeDisabled} onBlur={(e) => handleBlur(e)} />
            {!activeDisabled ? <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onMouseDown={(e) => onToggleEditItem(e)}>
                    <i className="fa fa-edit" />
                </button>
                : <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onMouseDown={(e) => onToggleNoEditItem(e)}>
                    <i className="fa fa-close" />
                </button>}
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </div>
    );
};

export default HumansListItem;
