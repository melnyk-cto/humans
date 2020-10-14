import React from "react";

import HumansListItem from "../HumansListItem";
import "./HumansList.scss";

const HumansList = ({humansData, onDeleted}) => {
    const listItem = humansData.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <HumansListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    id={id}
                />
            </li>
        );
    });
    return <ul className="list-group humansList">{listItem}</ul>;
};

export default HumansList;
