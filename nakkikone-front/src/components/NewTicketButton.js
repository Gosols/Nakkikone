import React, { useState } from "react";

import {
  MenuItem,
  FormControl,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import { ticketProperties } from "../functions/ticketProperties";
import { databaseService } from "../functions/databaseService";
import TicketModal from "./TicketModal";

export default function NewTicketButton({
  openModal,
  toggleOpenModal,
  activeUser,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button variant="outlined" color="primary" onClick={toggleOpenModal}>
        New ticket
      </Button>
      <TicketModal
        title="Create a new ticket"
        openModal={openModal}
        toggleOpenModal={toggleOpenModal}
        activeUser={activeUser}
      />
    </div>
  );
}
