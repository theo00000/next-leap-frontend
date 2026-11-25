import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

function SmokeComponent() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Next Leap</h1>

      <p role="status">Count: {count}</p>

      <button onClick={() => setCount((value) => value + 1)}>Increment</button>
    </section>
  );
}

describe("Frontend testing infrastructure", () => {
  it("renders a React component", () => {
    render(<SmokeComponent />);

    expect(
      screen.getByRole("heading", {
        name: "Next Leap",
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("handles user interaction and state updates", async () => {
    const user = userEvent.setup();

    render(<SmokeComponent />);

    expect(screen.getByRole("status")).toHaveTextContent("Count: 0");

    await user.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByRole("status")).toHaveTextContent("Count: 1");
  });
});
