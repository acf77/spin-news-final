import React, { createContext, useState } from "react";

type Data = {
  title: string;
  setTitle: object;
  news: string;
  setNews: object;
  author: string;
  setAuthor: object;
  data: string;
  setData: object;
};

export const Context = createContext<Data>({} as Data);

export const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState();
  const [news, setNews] = useState();
  const [author, setAuthor] = useState();

  const data = [
    {
      id: 1,
      tit: "Oh louco, meu",
      not: "Grande pessoa, tanto no pessoal quanto no profissional, bicho.",
      aut: "Fausto Silva",
    },
  ];

  return (
    <Context.Provider
      value={{ title, setTitle, news, setNews, author, setAuthor, data }}
    >
      {children}
    </Context.Provider>
  );
};
