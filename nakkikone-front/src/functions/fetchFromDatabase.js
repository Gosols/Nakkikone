export async function fetchTickets() {
  const corsProxy = "https://supermarche-maison-87978.herokuapp.com/";

  const response = await fetch(
    corsProxy + "https://nakkikone-app.herokuapp.com/tickets"
  );

  const data = await response.json();

  return data;
}
