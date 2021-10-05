import React, { useState } from "react";
import { testPromise } from "../../services/Services";

const MyPromise = () => {
  const [result, setResult] = useState("");

  const handlePromise = (milleSeconds, type) => {
    setResult("");
    testPromise(milleSeconds, type)
      .then((res) => {
        setResult(
          `Timeout de ${milleSeconds} mili segundos... respuesta: ${res}`
        );
      })
      .catch((res) => {
        setResult(
          `Timeout de ${milleSeconds} mili segundos... respuesta: ${res}`
        );
      });
  };

  const handleMultiPromise = async (milleSeconds, type, total) => {
    let promises = [];

    for (let index = 0; index < total; index++) {
      promises.push(testPromise(milleSeconds, type));
    }
    console.log(2222, promises);

    const resp = await Promise.all([...promises])
      .then((res) => {
        console.log(111, res);
        setResult(
          `Multi - Timeout de ${milleSeconds} mili segundos... respuesta: ${res}`
        );
      })
      .catch((reason) => {
        console.log(222, reason);
        setResult(
          `Multi - Timeout de ${milleSeconds} mili segundos... respuesta: ${reason}`
        );
      });

    console.log(444, resp);
    return resp;
  };

  return (
    <div className="justify-content-center container-fluid">
      <h1 className="text-center">Promesas</h1>
      <hr />
      <button onClick={() => handlePromise(2000, "EXITO")}>
        Promesa exitosa
      </button>
      <button onClick={() => handlePromise(2000, "ERROR")}>
        Promesa erronea
      </button>
      <button onClick={() => handleMultiPromise(3000, "ERROR", 10)}>
        Multi Promesas exitosas
      </button>
      {result.length > 0 && (
        <div>
          Resultado de la prueba: <span>{result}</span>
        </div>
      )}
    </div>
  );
};

export default MyPromise;
