import { renderWithClient } from "../utils/createWrapper";
import Loading from "../components/Loading";
import { screen } from "@testing-library/react";

describe("loading component", () => {
    test("should render loading component", async () => {
        renderWithClient(<Loading />);
        const img = await screen.findByRole("img");
        const alt = await screen.findByAltText("loading");

        expect(img).toBeInTheDocument();
        expect(alt).toBeInTheDocument();
    });
});