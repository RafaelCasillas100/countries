import React from "react";
import { Input, Row } from "antd";
const { Search } = Input;

const Main: React.FC = () => {
  return (
    <Row>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
      />
    </Row>
  );
};

export default Main;
