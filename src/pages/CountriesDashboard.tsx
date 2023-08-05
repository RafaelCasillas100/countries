import React, { useEffect, useState } from "react";
import SearchCountryBar from "../components/SearchCountryBar";
import CountryInformation from "../components/CountryInformation";
import { getCountryByName } from "../services/countriesService";
import { Country } from "../types/Country";
import { Col, Row, message } from "antd";
import { styled } from "styled-components";

const Containter = styled.div`
  padding-top: 5rem;
`;

const CountriesDashboard: React.FC = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [countryName, setCountryName] = useState<string>("");
  const [isFetchingCountry, setIsFetchingCountry] = useState<boolean>(false);

  const getCountry = async (countryName: string) => {
    setIsFetchingCountry(true);
    setCountry(null);
    try {
      const countryData = await getCountryByName(countryName);
      setCountry(countryData);
    } catch (error) {
      message.warning((error as Error).message);
    }
    setIsFetchingCountry(false);
  };

  useEffect(() => {
    if (!countryName) setCountry(null);
    else getCountry(countryName);
  }, [countryName]);

  return (
    <Containter>
      <Row>
        <Col span={10} offset={7}>
          <SearchCountryBar
            setCountryName={setCountryName}
            isFetchingCountry={isFetchingCountry}
          />
          <CountryInformation writtenCountry={countryName} country={country} />
        </Col>
      </Row>
    </Containter>
  );
};

export default CountriesDashboard;
