import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./style.css";

const MyForMik = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length > 15) {
      errors.firstname = "Debe tener menos de 15 caracteres";
    }

    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length > 20) {
      errors.lastname = "Debe tener menos de 20 caracteres";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Correo invalido";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
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
        name="firstname"
        type="firstname"
        onChange={formik.handleChange}
        value={formik.values.firstname}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div>{formik.errors.firstname}</div>
      ) : null}
      <label htmlFor="lastname">Apellido:</label>
      <input
        id="lastname"
        name="lastname"
        type="lastname"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MyForMik;
