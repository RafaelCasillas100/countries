import React, { useEffect, useState } from "react";
import { AutoComplete, Input, Row, Typography } from "antd";
import { styled } from "styled-components";
import { getAllCountries } from "../services/countriesService";

const { Search } = Input;
const { Title } = Typography;

const CenteredTitle = styled(Title)`
  padding-bottom: 1rem;
  text-align: center;
`;

type Props = {
  setCountryName: React.Dispatch<string>;
  isFetchingCountry: boolean;
};

const SearchCountryBar: React.FC<Props> = ({
  setCountryName,
  isFetchingCountry,
}) => {
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [options, setOptions] = useState<{ value: string }[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const allCountries = await getAllCountries();
      setAllCountries(allCountries);
    };
    getCountries();
  }, []);

  const filterCountries = (text: string) => {
    if (!text) {
      setOptions([]);
      setCountryName("");
      return;
    }
    const filteredCountries = allCountries.filter((country) =>
      country.toLowerCase().startsWith(text.toLowerCase())
    );
    setOptions(filteredCountries.map((country) => ({ value: country })));
  };

  const onSelect = (countrySelected: string) => {
    setCountryName(countrySelected);
  };

  return (
    <>
      <CenteredTitle level={4}>Country Lookup</CenteredTitle>
      <Row>
        <AutoComplete
          options={options}
          style={{ width: "100%" }}
          onSelect={onSelect}
          onSearch={filterCountries}
        >
          <Search
            placeholder="Type a name of a Country..."
            enterButton="Search"
            allowClear
            loading={isFetchingCountry}
            onSearch={onSelect}
          />
        </AutoComplete>
      </Row>
    </>
  );
};

export default SearchCountryBar;
