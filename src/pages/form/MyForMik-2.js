import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

import "./style.css";

const MyForMik = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .max(15, "Menos de 15 caracteres")
          .required("Requido"),
        lastname: Yup.string()
          .max(20, "Menos de 20 caracteres")
          .required("Requido"),
        email: Yup.string().email("Correo invalido").required("Requido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstname">Nombre</label>
          <Field name="firstname" type="text" placeholder="Nombre" />
          <ErrorMessage name="firstname" />

          <label htmlFor="lastname">Apellido</label>
          <Field name="lastname" type="text" />
          <ErrorMessage name="lastname" />

          <label htmlFor="email">Correo Electrónico</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="message">Mensaje</label>
          <Field name="message" as="textarea" className="form-textarea" />

          <label htmlFor="colors">Colores</label>
          <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </Formik>
  );
};

export default MyForMik;
