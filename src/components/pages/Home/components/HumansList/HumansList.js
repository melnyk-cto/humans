import React from "react";

import HumansListItem from "../HumansListItem";
import "./HumansList.scss";

const HumansList = ({
                        humansData,
                        onDeleted,
                        onToggleDoneItem,
                        onToggleImportantItem
                    }) => {
    const listItem = humansData.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <HumansListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDoneItem={() => onToggleDoneItem(id)}
                    onToggleImportantItem={() => onToggleImportantItem(id)}
                />
            </li>
        );
    });
    return <ul className="list-group humansList">{listItem}</ul>;
};

export default HumansList;
