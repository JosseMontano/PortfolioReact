import React, { useState } from "react";
import { gmailRequest } from "../../services/gmail";
import { FormGmail } from "./../../interface/formGmail";

export const UseForm = (
  initialForm: FormGmail,
  validateForm: (form: any) => {}
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({} as FormGmail | any);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleSend = async (form: FormGmail) => {
    try {
      const response = await gmailRequest(form);
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
      setTimeout(() => setResponse(false), 5000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      handleSend(form);
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
