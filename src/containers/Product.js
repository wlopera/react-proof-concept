import React, { useState, useEffect } from "react";
import { Dropdown, Input } from "semantic-ui-react";

import { Card } from "semantic-ui-react";

const Product = (props) => {
  const { getData, addData, newValue } = props;
  const [options, setOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState({});
  const [newOption, setNewOption] = useState({});

  useEffect(() => {
    setOptions(getData());
    setCurrentValue(newValue);
  }, [getData, newValue]);

  const handleAddition = (event, { value }) => {
    const optionsCurrent = options.filter((item) => item.value !== 999);
    const option = { key: 999, text: value, value: 999, message: "" };

    setNewOption(option);
    setOptions([...optionsCurrent, option]);
    setCurrentValue(option);
  };

  const handleChange = (event, { value }) => {
    const option = options.filter((item) => item.value === value);
    setCurrentValue(option[0]);
  };

  const addDataHandler = () => {
    addData(newOption.text);
  };

  const changeHandler = (e, data) => {
    setCurrentValue({ ...currentValue, message: data.value });
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header>Idiomas del Mundo</Card.Header>
      </Card.Content>
      <Card.Content>
        {options && currentValue.value && (
          <div>
            <Dropdown
              options={options}
              placeholder="Lenguaje"
              search
              selection
              fluid
              allowAdditions
              value={currentValue.value}
              onAddItem={handleAddition}
              onChange={handleChange}
            />
            <br />
            <Input value={currentValue.message} onChange={changeHandler} />
            <br />
            <br />
            <hr />
            <button onClick={addDataHandler}>Agregar</button>
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default Product;
