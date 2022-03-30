import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../utils/test-utils";
import GameCard from ".";

describe("GameCard testing", () => {
  const item = {
    titulo: "Grand Theft Auto IV (PS3)",
    ano: "2008",
    nota: "98.9",
    urlImagem:
      "https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/playstation-3/grand-theft-auto-iv",
  };

  render(<GameCard item={item} />);

  it("render content", () => {
    const title = screen.getByText("Grand Theft Auto IV (PS3)");
    expect(title).toBeDefined();
    const imgAlt = screen.getByAltText("Grand Theft Auto IV (PS3)");
    expect(imgAlt).toBeDefined();
  });
});
