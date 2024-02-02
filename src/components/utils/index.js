import { useState } from "react";

export const searchFromArray = ({ array, searchValue }) => {
  return array.filter((el) => el.name === searchValue);
};

export const useGetData = ({ getDatafFrom }) => {
  const [data, setData] = useState();
  // fetch()
  const searchValue = () => {};
  return { searchValue, blogData };
};
