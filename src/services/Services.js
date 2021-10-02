const initialOptions = [
  { key: 1, text: "Inglés", value: 1, message: "Idioma 1 - Inglés" },
  { key: 2, text: "Francés", value: 2, message: "Idioma 2 - Francés" },
  { key: 3, text: "Español", value: 3, message: "Idioma 3 - Español" },
  { key: 4, text: "Alemán", value: 4, message: "Idioma 4 - Alemán" },
  { key: 5, text: "Chino", value: 5, message: "Idioma 5 - Chino" },
];

export const getDataInitial = () => {
  return initialOptions;
};

export const addData = (options, value) => {
  const id = options.length + 1;
  const message = "Idioma " + id + " " + value;
  const newOption = { key: id, text: value, value: id, message };
  return {
    option: newOption,
    data: [...options, newOption],
  };
};
