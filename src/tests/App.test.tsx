import { render, screen } from "@testing-library/react";
import Qr from "../components/Main";

describe("App", () => {
  test("first test", () => {
    render(<Qr />);
    const linkElement = screen.getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
  });
});
