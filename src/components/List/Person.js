import React from "react";

const Person = ({ person }) => {
  const { key, id, name, age, country } = person;
  return (
    <li key={key}>
      {name}. Tiene {age} de edad y nacio en {country}
    </li>
  );
};

export default Person;
