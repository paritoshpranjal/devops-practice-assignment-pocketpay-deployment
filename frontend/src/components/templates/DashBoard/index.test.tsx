import React from "react";
import { render, screen } from "@testing-library/react";
import DashBoard from ".";

describe("DashBoard component", () => {
  it("renders the NavBar", () => {
    render(
      <DashBoard navBar={<div>NavBar Content</div>} header={<div>header</div>} body={<div>Body Content</div>} />
    );
    const navBarElement = screen.getByText("NavBar Content");
    expect(navBarElement).toBeInTheDocument();
  });

  it("renders the header", () => {
    render(
      <DashBoard header={<div>Header Content</div>} navBar={<div>NavBar Content</div>} body={<div>Body Content</div>} />
    );
    const headerElement = screen.getByText("Header Content");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the body", () => {
    render(
      <DashBoard header={<div>Header Content</div>} navBar={<div>NavBar Content</div>} body={<div>Body Content</div>} />
    );
    const bodyElement = screen.getByText("Body Content");
    expect(bodyElement).toBeInTheDocument();
  });

});
