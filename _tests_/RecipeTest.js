import React from "react"
import { render, screen } from "@testing-library/react"

const mockPageContext = {
  summary: {
    processed: ["This is a test of the summary processed section of recipes"],
  }
};

const RecipeCorrect = ({pageContext}) => {
  const { recipe } = pageContext.recipe;

  return (
        <div>
      <ul>
        {recipe.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
};

test("Displays the summary of the recipe", () => {
  render(<RecipeCorrect pageContext={mockPageContext} />);
    expect(screen.getByText(recipe)).toBeInTheDocument();
});
