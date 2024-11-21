import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom" // For <Link> component compatibility

test("Displays a list of recipes with links", () => {
  // Mock data that resembles what would come from the GraphQL query
  const mockData = {
    Drupal: {
      nodeRecipes: {
        nodes: [
          { title: "Chocolate Cake", id: "1" },
          { title: "Banana Bread", id: "2" },
        ],
      },
    },
  }

  const { getAllByRole } = render(
    <MemoryRouter>
      <recipePost data={mockData} />
    </MemoryRouter>
  )

  // Verify each recipe's title is rendered
  const recipeLinks = getAllByRole("link")
  expect(recipeLinks.length).toBe(mockData.Drupal.nodeRecipes.nodes.length)
  expect(recipeLinks[0]).toHaveTextContent("Chocolate Cake")
  expect(recipeLinks[1]).toHaveTextContent("Banana Bread")

  // Verify each link's href matches the recipe title (slug format)
  expect(recipeLinks[0].getAttribute("href")).toBe("/recipe/Chocolate Cake")
  expect(recipeLinks[1].getAttribute("href")).toBe("/recipe/Banana Bread")
})
