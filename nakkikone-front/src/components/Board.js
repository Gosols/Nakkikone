import React, { useState, useEffect } from "react";
import { Grid, Paper, Button } from "@material-ui/core";

import "../styles/styles.css";
import { Ticket } from "./Ticket";
import { databaseService } from "../functions/databaseService";
import NewTicketButton from "./NewTicketButton";

export const Board = ({ activeUser }) => {
  const [ticketsData, setTicketsData] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    databaseService.fetchTickets().then((res) => setTicketsData(res));
  }, []);

  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const RenderTickets = ({ status }) => {
    if (ticketsData !== undefined) {
      return (
        <div>
          {ticketsData.map((ticket) => {
            if (ticket.status === status) {
              return <Ticket key={ticket.id} data={ticket} />;
            }
            return;
          })}
        </div>
      );
    }
    return (
      <div>
        <Ticket skeleton={true} />
        <Ticket skeleton={true} />
        <Ticket skeleton={true} />
        <Ticket skeleton={true} />
        <Ticket skeleton={true} />
      </div>
    );
  };

  return (
    <div>
      <NewTicketButton
        openModal={openModal}
        toggleOpenModal={toggleOpenModal}
        activeUser={activeUser}
      />
      <div className="board">
        <Grid item xs={12} className="gridContainer">
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Paper className="column">
                <div className="columnHeader">
                  <h2>New</h2>
                </div>
                <div className="ticketListContainer">
                  <RenderTickets status="New" />
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="column">
                <div className="columnHeader">
                  <h2>In progress</h2>
                </div>
                <div className="ticketListContainer">
                  <RenderTickets status="In Progress" />
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="column">
                <div className="columnHeader">
                  <h2>Done</h2>
                </div>
                <div className="ticketListContainer">
                  <RenderTickets status="Done" />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
