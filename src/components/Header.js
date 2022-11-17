import { React } from "react";
import TextField from "@mui/material/TextField";

export const Header = ({ onSubmit, handleChange, value }) => {
  return (
    <div>
      <TextField
        style={{ marginBottom: "0.5rem", width: "100%" }}
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            onSubmit(e.target.value);
          }
        }}
      />
    </div>
  );
};
