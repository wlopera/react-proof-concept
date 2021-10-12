import React from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";

import "./style.css";

const MyForMik = () => {
  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    console.log(1111, field);
    console.log(2222, label);
    console.log(3333, props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });

    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

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
          <MyTextInput
            label="Nombre"
            name="firstname"
            type="text"
            placeholder="Introduzca su nombre"
          />

          <MyTextInput
            label="Apellido"
            name="lastname"
            type="text"
            placeholder="Introduzca su apellido"
          />

          <MyTextInput
            label="Correo Electrónico"
            name="email"
            type="email"
            placeholder="Introduzca su correo"
          />

          <MySelect label="Trabajo" name="jobType">
            <option value="">Seleccione su tipo de trabajo</option>
            <option value="designer">Diseñador</option>
            <option value="development">Desarrollador</option>
            <option value="product">Gerente</option>
            <option value="other">Otro</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            Acepto los terminos y condiciones
          </MyCheckbox>

          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </Formik>
  );
};

export default MyForMik;
