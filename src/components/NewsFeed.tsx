import * as React from "react";
const apiKey = "52e56bba9e6e457893b7b23700a34465";
const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
import styled from "styled-components";

const NewsArticle = styled.div`
   {
    overflow: hidden;
    h2 {
      font-family: Georgia, "Times New Roman";
    }
    a,
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
    }
  }
`;

const NewsFeedContainer = styled.div`
   {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: max-content;
    grid-auto-flow: row dense;
  }
`;

type P = {};

type S = {
  articles: {
    title: string;
    url: string;
    urlToImage: string;
    description: string;
  }[];
};

export class NewsFeed extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const response = await fetch(topHeadlinesUrl);
    const { articles } = await response.json();
    this.setState({ articles });
  };

  render() {
    const { articles } = this.state;
    return (
      <NewsFeedContainer>
        {articles.map((article, i) => (
          <NewsArticle key={i} className="nes-container">
            <a href={article.url}>
              <h4>{article.title}</h4>
              <img src={article.urlToImage} />
              <p>{article.description}</p>
            </a>
          </NewsArticle>
        ))}
      </NewsFeedContainer>
    );
  }
}
