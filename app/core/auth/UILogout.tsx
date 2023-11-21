"use client";
import React from "react";
import * as Feather from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function UILogout() {
  return (
    <>
      <a
        className="dropdown-item"
        onClick={() => {
          signOut();
        }}
      >
        <Feather.FiLogOut className="align-middle me-1" />
        Log out
      </a>
    </>
  );
}
