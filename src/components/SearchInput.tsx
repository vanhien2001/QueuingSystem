import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ReactComponent as searchSvg } from "../Asset/Img/search.svg";

interface IProps {
  className?: string;
  placeholder?: string;
}

const SearchInput: React.FC<IProps> = ({ className, placeholder }) => {

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
