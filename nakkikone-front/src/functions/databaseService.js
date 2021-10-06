const corsProxy = "https://supermarche-maison-87978.herokuapp.com/";
const baseUrl = "https://fathomless-scrubland-67317.herokuapp.com/";

export const databaseService = {
  fetchTickets: async function fetchTickets() {
    const response = await fetch(corsProxy + baseUrl + "tickets");

    const data = await response.json();

    return data;
  },

  fetchUsers: async function fetchUsers() {
    const response = await fetch(corsProxy + baseUrl + "users");

    const data = await response.json();

    return data;
  },

  addTicket: async function addTicket(data) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(corsProxy + baseUrl + "tickets", payload);
  },

  updateTicket: async function updateTicket(data) {
    const payload = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(corsProxy + baseUrl + "tickets", payload);
  },

  deleteTicket: async function deleteTicket(id) {
    const payload = { method: "DELETE" };
    await fetch(corsProxy + baseUrl + "tickets/" + id, payload);
  },
};
