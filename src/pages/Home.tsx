import { FC, useState } from "react";
import { SearchBar, Suggestion } from "@components/index";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="home-container">
      <SearchBar variant="large" setIsFocused={setIsFocused} />
      {isFocused && <Suggestion />}
    </div>
  );
};

export { Home };
