import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
import { useForm } from "../../hooks/useForm";
import { Page } from "./Page";

export const Form = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const config = { slice: true, start: 5, end: 10 };
  const { handleChange, isCompleted } = useForm(state, setState, config);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate("/logo");
  };

  return (
    <Page
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isCompleted={isCompleted}
    />
  );
};
