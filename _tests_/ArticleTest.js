import React from "react"
import { render, screen } from "@testing-library/react"

// Data
const mockPageContext = {
    article: {
      title: "Test Article",
      body: {
        value: "<p>This is a Test article to see if an error has occurred</p>",
      },
    },
  };

// You have to write data-testid
const ArticleCorrect = ({pageContext}) => {
  const { article } = pageContext;

  return (
        <div dangerouslySetInnerHTML={{ __html: article.body.value}} data-testid="article-body"/>
  );
};

test("Displays the correct Collection Information", () => {
    render(<ArticleCorrect pageContext={mockPageContext} />);

    expect(screen.getByTestId("article-title")).toHaveTextContent("Test Article");
    expect(screen.getByTestId("article-body")).toHaveTextContent("You know I deserve it");
  });
