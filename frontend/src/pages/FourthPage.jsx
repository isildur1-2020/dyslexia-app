import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const FourthPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title2, list2, borderColor } = currentLanguaje;
  return (
    <QuestionList
      clockID={4}
      list={list2}
      title={title2}
      borderColor={borderColor}
      backgroundColor="#83DDF7"
    />
  );
};
