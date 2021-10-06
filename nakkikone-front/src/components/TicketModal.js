import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { ticketProperties } from "../functions/ticketProperties";
import { databaseService } from "../functions/databaseService";

export default function TicketModal({
  openModal,
  toggleOpenModal,
  activeUser,
  title,
  preDetails,
  preLevel,
  preCategory,
  preType,
  preEstimation,
  id,
  creationDate,
  status,
}) {
  // variables that save the values from the select elements
  const [details, setDetails] = useState(
    preDetails === undefined ? "" : preDetails
  );
  const [level, setLevel] = useState(preLevel === undefined ? "" : preLevel);
  const [category, setCategory] = useState(
    preCategory === undefined ? "" : preCategory
  );
  const [type, setType] = useState(preType === undefined ? "" : preType);
  const [estimation, setEstimation] = useState(
    preEstimation === undefined ? 0 : preEstimation
  );

  // close modal and send data to database
  const addNewTicket = () => {
    toggleOpenModal();

    //send data with http request
    const payload = {
      creationDate: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      creator: activeUser,
      textContent: details,
      level: level,
      category: category,
      type: type,
      status: ticketProperties.status.new,
      estimationInHours: estimation,
      assignedTo: activeUser,

      comments: [],
    };
    databaseService.addTicket(payload);
  };

  // when updating a ticket
  const updateTicket = () => {
    toggleOpenModal();

    //send data with http request
    const payload = {
      id: id,
      creationDate: creationDate,
      lastModified: new Date().toISOString(),
      creator: activeUser,
      textContent: details,
      level: level,
      category: category,
      type: type,
      status: status,
      estimationInHours: estimation,
      assignedTo: activeUser,

      comments: [],
    };
    databaseService.updateTicket(payload);
  };

  const RenderSubmitButton = () => {
    if (id === undefined) {
      return (
        <Button onClick={addNewTicket} color="primary">
          Create
        </Button>
      );
    } else {
      return (
        <Button onClick={updateTicket} color="primary">
          Save
        </Button>
      );
    }
  };

  return (
    <Dialog
      open={openModal}
      onClose={toggleOpenModal}
      aria-labelledby="ticket-detail-dialog"
    >
      <DialogTitle id="ticket-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          style={{ width: "500px" }}
          label="Details"
          multiline
          rows={10}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </DialogContent>
      <DialogContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl style={{ width: "48.6%" }}>
            <TextField
              value={level}
              select
              label="Level"
              id="level"
              variant="outlined"
              onChange={(e) => setLevel(e.target.value)}
            >
              {Object.values(ticketProperties.level).map((value, i) => {
                return (
                  <MenuItem key={i} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </FormControl>
          <FormControl style={{ width: "48.6%" }}>
            <TextField
              value={category}
              select
              label="Category"
              id="category"
              variant="outlined"
              onChange={(e) => setCategory(e.target.value)}
            >
              {Object.values(ticketProperties.category).map((value, i) => {
                return (
                  <MenuItem key={i} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </FormControl>
        </div>
      </DialogContent>
      <DialogContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <FormControl style={{ width: "48.6%" }}>
            <TextField
              value={type}
              select
              label="Type"
              id="type"
              variant="outlined"
              onChange={(e) => setType(e.target.value)}
            >
              {Object.values(ticketProperties.type).map((value, i) => {
                return (
                  <MenuItem key={i} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </FormControl>
          <FormControl style={{ width: "48.6%" }}>
            <TextField
              type="number"
              value={estimation}
              label="Estimation"
              id="estimation"
              variant="outlined"
              onChange={(e) => setEstimation(e.target.value)}
            >
              {Object.values(ticketProperties.status).map((value, i) => {
                return (
                  <MenuItem key={i} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <RenderSubmitButton />
      </DialogActions>
    </Dialog>
  );
}
