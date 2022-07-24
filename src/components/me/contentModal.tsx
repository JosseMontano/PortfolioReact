import { UseForm } from "../../hooks/form/useForm";
import styled from "styled-components";
import { FormGmail } from "./../../interface/formGmail";
import { useState } from "react";

const Input = styled.input`
  border: thin solid #dedede;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
`;
const TextArea = styled.textarea`
  border: thin solid #dedede;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
  font-family: inherit;
  resize: none;
`;
const ErrorCss = styled.p`
  font-weight: "bold";
  color: "#dc3545";
`;
const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form:FormGmail) => {
  let errors = {} as FormGmail
  //expresions regulars
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/; //of 1 to 255
  //si queremos de uno en uno, concatenamos todos en un solo if
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }
  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }
  if (!form.comments.trim()) {
    errors.comments = "El campo 'comentarios a tratar' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'comentario' no debe acceder los 255 caracteres";
  }
  return errors;
};

export const ContentModal = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);


  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <ErrorCss>{errors.name}</ErrorCss>}

        <Input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <ErrorCss>{errors.email}</ErrorCss>}
        <Input
          type="text"
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <ErrorCss>{errors.subject}</ErrorCss>}
        <TextArea
          name="comments"
          cols={50}
          rows={5}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></TextArea>
        {errors.comments && <ErrorCss>{errors.comments}</ErrorCss>}

        <input type="submit" value="Enviar" />
      </form>
      {loading && <p>Cargando</p>}
      {response && <p>Enviado</p>}
    </>
  );
};


