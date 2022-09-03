import { mount } from "@cypress/react";
import { Button, ButtonProps } from "./Button";

describe("Button Test", () => {
  let defaultProps: ButtonProps;

  beforeEach(() => {
    defaultProps = {
      onClick: cy.stub().as("onClickHandler"),
    };
  });

  it("render button", () => {
    mount(<Button onClick={defaultProps.onClick} />);

    cy.get("button").should("be.visible").should("contain.text", "Button Test");
  });

  it("triggers onClick event", () => {
    mount(<Button onClick={defaultProps.onClick} />);

    cy.get("button").click();

    cy.get("@onClickHandler").should("have.been.calledOnce");
  });
});
