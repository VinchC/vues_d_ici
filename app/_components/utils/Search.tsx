import React from "react";
import SearchButton from "./SearchButton";

const Search = ({
  search,
  handleSearchUpdate,
}: {
  search: string;
  handleSearchUpdate: any;
}) => {
  return (
    <div className="relative w-72 paragraph">
      <input
        type="search"
        name="search"
        aria-label="cherche du contenu dans le titre ou le texte d'un article"
        placeholder={search}
        className="bg-white h-8 px-5 pr-10 w-full rounded-full text-black focus:outline-none"
        onChange={(event) => handleSearchUpdate(event.target.value)}
      />
      <SearchButton />
    </div>
  );
};

export default Search;
