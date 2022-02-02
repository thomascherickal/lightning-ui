import React from "react";
import { Outlet } from "react-router-dom";
import { Chip, styled } from "@mui/material";

import AdminMenu from "./AdminMenu";
import useLightingState from "hooks/useLightningState";

import LightningLogo from "resources/images/lightning-logo-with-text.svg";

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
});

export default function AdminView() {
  const lightningState = useLightingState();

  if (lightningState.isLoading) {
    return <div>Loading...</div>;
  }

  if (lightningState.isError || !lightningState.data) {
    return <div>Error loading app details...</div>;
  }

  return (
    <>
      <Header>
        <img src={LightningLogo} alt="Lightning Logo" />
        <Chip label="Local" color="error" />
      </Header>
      <AdminMenu />
      <Outlet />
    </>
  );
}
