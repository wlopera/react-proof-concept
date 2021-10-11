import React from "react";
import { persons } from "../../components/List/data";
import Person from "../../components/List/Person";

const Arrays = () => {
  const list = persons;
  return (
    <div className="justify-content-center container-fluid">
      <h1 className="text-center">Listas y Arreglos en React</h1>
      <hr />
      <ul>
        {list.map((person) => {
          // El Key no se pasa al componente hijo
          return <Person key={person.id} person={person} />;
        })}
      </ul>
    </div>
  );
};

export default Arrays;
