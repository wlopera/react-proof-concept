import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./style.css";

const MyForMik = () => {
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstname) {
  //     errors.firstname = "Required";
  //   } else if (values.firstname.length > 15) {
  //     errors.firstname = "Debe tener menos de 15 caracteres";
  //   }

  //   if (!values.lastname) {
  //     errors.lastname = "Required";
  //   } else if (values.lastname.length > 20) {
  //     errors.lastname = "Debe tener menos de 20 caracteres";
  //   }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Correo invalido";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Menos de 15 caracteres")
        .required("Requido"),
      lastname: Yup.string()
        .max(20, "Menos de 20 caracteres")
        .required("Requido"),
      email: Yup.string().email("Correo invalido").required("Requido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">Nombre:</label>
      <input
        id="firstname"
        type="text"
        {...formik.getFieldProps("firstname")}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div>{formik.errors.firstname}</div>
      ) : null}
      <label htmlFor="lastname">Apellido:</label>
      <input id="lastname" type="text" {...formik.getFieldProps("lastname")} />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <label htmlFor="email">Correo Electrónico:</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForMik;
