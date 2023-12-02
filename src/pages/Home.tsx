import { FC } from "react";
import { SearchBar, Suggestion } from "@components/index";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="home-container">
      <SearchBar variant="large" />
      <Suggestion />
    </div>
  );
};

export { Home };
