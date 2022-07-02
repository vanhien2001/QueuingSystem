import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as searchSvg } from "../../Asset/Img/search.svg";

interface props {
  className?: string;
  placeholder?: string;
}

const SearchInput: React.FC<props> = ({ className, placeholder }) => {

  return (
    <Input
      type="text"
      style={{height: '44px', fontSize: '16px'}}
      suffix={
        <Icon
          component={searchSvg}
          style={{ fontSize: "20px", color: "#FF7506"}}
        />
      }
      className={className}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
