import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { router } from "./routes/router";
import "./app.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)