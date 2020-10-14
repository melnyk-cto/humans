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
    // Используем Rest parameter для того что бы вместо "item" передать все значения кроме id, поскольку он нам и не нужен в компоненте "HumansListItem"
    const { id, ...itemProps } = item;
    return (
      // "key" нужен для того что бы повисить производительность, поскольку ему не нужно будет сравнивать и проверять все елементы, он будет проверять их по ключу и только в случее отличия их обновлять;
      // Также не стоит использывать index в качестве ключа, по-сколько это React делает по умолчанию. Такой способ позволить только избежать ошибки в консоли;
      <li key={id} className="list-group-item">
        {/* Spread operator, это аналогично записи label={item.label} и т.д.*/}
        {/* Мы использывание Spreed operator поскольку у нас названия ключей в обьекте равно названию свойств*/}
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
