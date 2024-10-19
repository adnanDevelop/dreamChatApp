import { Routes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

import SocketProvider from "../socket/SocketProvider";

export const Router = () => {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes />
      </SocketProvider>
    </BrowserRouter>
  );
};
