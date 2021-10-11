import React from "react";

const Person = ({ person }) => {
  const { key, id, name, age, country } = person;
  // El Key no se pasa al componente hijo
  console.log(1234, key, id);
  return (
    <li>
      {name}. Tiene {age} de edad y nacio en {country}
    </li>
  );
};

export default Person;
