import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import "../styles/styles.css";
import { Ticket } from "./Ticket";

import { fetchTickets } from "../functions/fetchFromDatabase";

export const Board = (props) => {
  const [ticketData, setTicketData] = useState();

  useEffect(() => {
    fetchTickets().then((res) => setTicketData(res));
  }, []);

  const RenderTickets = ({ status }) => {
    if (ticketData !== undefined) {
      return (
        <div>
          {ticketData.map((ticket) => {
            if (ticket.status === status) {
              return <Ticket key={ticket.id} text={ticket.textContent} />;
            }
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
    <div className="board">
      <Grid item xs={12} className="gridContainer">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Paper className="column">
              <div className="columnHeader">
                <h2>New</h2>
              </div>
              <div className="ticketListContainer">
                <RenderTickets status="new" />
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="column">
              <div className="columnHeader">
                <h2>In progress</h2>
              </div>
              <div className="ticketListContainer">
                <RenderTickets status="inProgress" />
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className="column">
              <div className="columnHeader">
                <h2>Done</h2>
              </div>
              <div className="ticketListContainer">
                <RenderTickets status="done" />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
