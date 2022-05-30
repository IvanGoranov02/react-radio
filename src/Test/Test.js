import React, { useState } from "react";
import {  Radio,  RadioGroup,  FormControlLabel,  FormLabel,  Button,} from "@material-ui/core";

function Test() {
  const radioButtons = [
    { id: 1, label: "Unemployed", value: "unemployed" },
    { id: 2, label: "Part-time", value: "part-time" },
    { id: 3, label: "Over-time", value: "over-time" },
    { id: 4, label: "Full-time", value: "full-time" },
    { id: 5, label: "Fl-time", value: "fu-time" },
  ];

  const [radioData, setRadioData] = useState();
  function handleRadioChange(event) {
    setRadioData(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)

    console.log(radioData);
  }
  return (
    <form
      style={{      position: "absolute",       left: "50%",      top: "50%",      transform: "translate(-50%, -50%)"  }}    onSubmit={handleSubmit}
    >
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {radioButtons.map((item, key) => (
          <FormControlLabel
            type="radio" id={item?.id} name={item?.label}  value={item?.value} key={key}   onChange={handleRadioChange}  control={<Radio />}  label={item?.label}
          />
        ))}
      </RadioGroup>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}

export default Test;
