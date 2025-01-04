// import { useState } from "react";
import "./App.css";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
// import Header, { FBHeader } from "./components/ui/Header";

function App() {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarTrigger>Impact</MenubarTrigger>
          <MenubarTrigger>News</MenubarTrigger>
          <MenubarTrigger>Team</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      {/* <FBHeader backgroundColor="#3b5998" /> */}

      {/* <h1>App</h1> */}
    </>
  );
}

export default App;
