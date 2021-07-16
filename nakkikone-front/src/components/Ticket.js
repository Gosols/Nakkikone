import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import { Skeleton } from "@material-ui/lab";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

export const Ticket = ({ text, skeleton }) => {
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
            onClick={() => console.log("gayyyy")}
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
      <div className="ticketBody">
        <p className="ticketParagraph">{text}</p>
      </div>
      <div className="deleteButton">
        <ShowButtons />
      </div>
      <Dialog
        open={open}
        onClose={toggleOpen}
        aria-labelledby="ticket-detail-dialog"
      >
        <DialogTitle id="ticket-dialog-title">Edit ticket</DialogTitle>
        <DialogContent>
          <textarea defaultValue={text} />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
