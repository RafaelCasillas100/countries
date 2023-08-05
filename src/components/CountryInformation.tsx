import React from "react";
import { Country } from "../types/Country";
import { Space, Typography, Image, Row, Col } from "antd";
import { styled } from "styled-components";

const { Text, Paragraph } = Typography;

const CenteredText = styled(Paragraph)`
  padding: 4rem 0 0.5rem;
  text-align: center;
  font-size: 1.2rem;
`;

const ImageCentered = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

type Props = {
  writtenCountry: string;
  country: Country | null;
};

const CountryInformation: React.FC<Props> = ({ writtenCountry, country }) => {
  if (!country) return null;
  return (
    <>
      <CenteredText>Results for {writtenCountry}</CenteredText>

      <Row>
        <Col span={16} offset={4}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Text>
              Country Name: <Text strong>{country.name.official}</Text>
            </Text>
            <Text>
              Region: <Text strong>{country.region}</Text>
            </Text>
            <Text>
              Capital: <Text strong>{country.capital}</Text>
            </Text>
            <Text>Flag: </Text>
            <ImageCentered>
              <Image
                width={200}
                src={country.flags.png}
                alt={country.flags.alt}
                preview={false}
              />
            </ImageCentered>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default CountryInformation;
