import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 300000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={100000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
          })
        }
        unit="$"
        amount={300000}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
            ...data,
            downPayment: value 
          })
        }
        unit={"$"}
        amount={50000}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
            ...data,
            loanAmount: value
        })}
        unit={"$"}
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) => setData({
            ...data,
            interestRate: value
        })}
        unit={"%"}
        amount={1000}
      />
    </>
  );
};

export default SliderSelect;
