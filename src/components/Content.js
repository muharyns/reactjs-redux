import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export const Content = ({ idx, id, item, handleRemove, handleEdit }) => {
  return (
    <>
      <Card
        style={{
          padding: "1rem",
          margin: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
        variant="outlined"
      >
        {item}
        <div>
          <Button
            color="secondary"
            size="small"
            onClick={() => handleRemove(idx)}
          >
            <CloseIcon color="error" />
          </Button>
          <Button color="secondary" size="small" onClick={() => handleEdit(id)}>
            <EditIcon color="warning" />
          </Button>
        </div>
      </Card>
    </>
  );
};
