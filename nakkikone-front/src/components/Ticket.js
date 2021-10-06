import React, { useState } from "react";

import {
  Paper,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Dialog,
} from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import TicketModal from "./TicketModal";
import { databaseService } from "../functions/databaseService";

export const Ticket = ({ data, skeleton }) => {
  const [open, setOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const ShowButtons = () => {
    if (isMouseOver) {
      return (
        <div
          style={{ width: "max-content", height: "10px", marginLeft: "auto" }}
        >
          <EditRoundedIcon onClick={toggleOpen} style={{ color: "#00c853" }} />
          <DeleteRoundedIcon
            color="secondary"
            onClick={() =>
              window.confirm(
                "Are you sure you want to delete this ticket? (" + data.id + ")"
              )
                ? databaseService.deleteTicket(data.id)
                : 0
            }
          />
        </div>
      );
    }
    return <div></div>;
  };

  // if the ticket data is still loading, return this instead
  if (skeleton) {
    return (
      <div>
        <Paper className="Ticket" elevation={4}>
          <Skeleton variant="text" />
          <Skeleton variant="text" style={{ width: "80%" }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" style={{ width: "50%" }} />
        </Paper>
      </div>
    );
  }

  return (
    <Paper
      className="Ticket"
      elevation={4}
      onMouseLeave={() => setIsMouseOver(false)}
      onMouseEnter={() => setIsMouseOver(true)}
    >
      <div onClick={() => console.log("hellooo")} className="ticketBody">
        <p className="ticketParagraph">{data.textContent}</p>
      </div>
      <div className="deleteButton">
        <ShowButtons />
      </div>
      <TicketModal
        toggleOpenModal={toggleOpen}
        openModal={open}
        title="Edit ticket"
        preCategory={data.category}
        preDetails={data.textContent}
        preEstimation={data.estimationInHours}
        preLevel={data.level}
        preType={data.type}
        id={data.id}
        creationDate={data.creationDate}
        status={data.status}
      />
    </Paper>
  );
};
