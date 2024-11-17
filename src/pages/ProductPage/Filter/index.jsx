import { useState } from "react";
import {
  FilterContainer,
  FilterTitle,
  FilterSection,
  FilterOption,
  FilterCheckbox,
  FilterRadio,
  FilterSelect,
} from "./style";

const Filter = () => {
  const [filters, setFilters] = useState({
    marca: {
      Adidas: false,
      Balenciaga: false,
      KSwiss: false,
      Nike: false,
      Puma: false,
    },
    categoria: {
      EsporteELazer: false,
      Casual: false,
      Utilitario: false,
      Corrida: false,
    },
    genero: {
      Masculino: false,
      Feminino: false,
      Unissex: false,
    },
    estado: "Novo", // Para radio buttons
  });

  const handleCheckboxChange = (section, key) => {
    setFilters((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: !prevState[section][key],
      },
    }));
  };

  const handleRadioChange = (section, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  return (
    <FilterContainer>
      <FilterTitle>Filtrar por</FilterTitle>

      <FilterSection>
        <h4>Marca</h4>
        {Object.keys(filters.marca).map((key) => (
          <FilterOption key={key}>
            <FilterCheckbox
              type="checkbox"
              checked={filters.marca[key]}
              onChange={() => handleCheckboxChange("marca", key)}
            />
            <span>{key}</span>
          </FilterOption>
        ))}
      </FilterSection>

      <FilterSection>
        <h4>Categoria</h4>
        {Object.keys(filters.categoria).map((key) => (
          <FilterOption key={key}>
            <FilterCheckbox
              type="checkbox"
              checked={filters.categoria[key]}
              onChange={() => handleCheckboxChange("categoria", key)}
            />
            <span>{key}</span>
          </FilterOption>
        ))}
      </FilterSection>

      <FilterSection>
        <h4>Gênero</h4>
        {Object.keys(filters.genero).map((key) => (
          <FilterOption key={key}>
            <FilterCheckbox
              type="checkbox"
              checked={filters.genero[key]}
              onChange={() => handleCheckboxChange("genero", key)}
            />
            <span>{key}</span>
          </FilterOption>
        ))}
      </FilterSection>

      <FilterSection>
        <h4>Estado</h4>
        {["Novo", "Usado"].map((key) => (
          <FilterOption key={key}>
            <FilterRadio
              type="radio"
              name="estado"
              checked={filters.estado === key}
              onChange={() => handleRadioChange("estado", key)}
            />
            <span>{key}</span>
          </FilterOption>
        ))}
      </FilterSection>

      <FilterSection>
        <h4>Ordenar por</h4>
        <FilterSelect>
          <option>Mais relevantes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais vendidos</option>
          <option>Melhor avaliação</option>
        </FilterSelect>
      </FilterSection>
    </FilterContainer>
  );
};

export default Filter;
