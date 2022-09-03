import { mount } from "@cypress/react";
import App from "./App";

describe("App Component", () => {
  it("render app component", () => {
    mount(<App />);

    cy.get("div").should("contain", "Ola mundo");
  });
});
