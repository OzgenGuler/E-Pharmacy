import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectCurrentPage } from "../../redux/pharmacy/selectors";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/pharmacy/operations";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import InputForm from "../InputForm/InputForm";
import { useForm } from "react-hook-form";
import { options } from "../../data/select";
import { customStyles } from "./CustomStyles";
import Button from "../Button/Button";
import * as s from "./Filter.styled";

const Filter = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const [selectCategory, setSelectCategory] = useState("");
  const [search, setSearch] = useState("");
  const screen = useScreenWidth();
  const isDesktop = screen === "desktop";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const searchValue = watch("search");

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectCategory.value,
        name: search,
        page: currentPage,
        limit: isDesktop ? 12 : 9,
      })
    );
  }, [
    dispatch,
    selectCategory.value,
    search,
    currentPage,
    isDesktop,
    totalPages,
  ]);

  const handleCategoryChange = (selectedOption) => {
    setSelectCategory(selectedOption);
    dispatch(
      getProducts({
        category: selectedOption,
        name: search,
        page: 1,
        limit: isDesktop ? 12 : 9,
      })
    );
  };

  const onSubmit = () => {
    setSearch(searchValue);
    dispatch(
      getProducts({
        category: selectCategory.value,
        name: searchValue,
        page: 1,
        limit: isDesktop ? 12 : 9,
      })
    );
  };

  const handleResetClick = () => {
    dispatch(
      getProducts({
        category: "",
        name: "",
        page: 1,
        limit: isDesktop ? 12 : 9,
      })
    );
    setSearch("");
    setSelectCategory("");
  };

  return (
    <s.Forma onSubmit={handleSubmit(onSubmit)}>
      <s.SelectDesktop>
        <Select
          styles={customStyles}
          options={options}
          placeholder="Product category"
          onChange={handleCategoryChange}
          value={selectCategory}
          isSearchable={false}
        />
      </s.SelectDesktop>
      <s.InputDesktop>
        <InputForm
          name="search"
          type="text"
          placeholder="Search medicine"
          register={register}
          errors={errors}
        />
      </s.InputDesktop>
      <s.BtnBlock>
        <Button type="submit" name="filter" text="Filter" />
        <Button
          type="reset"
          name="filter"
          text="Reset"
          onClick={handleResetClick}
        />
      </s.BtnBlock>
    </s.Forma>
  );
};

export default Filter;
