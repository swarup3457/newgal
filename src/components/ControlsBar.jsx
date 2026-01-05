import React from "react";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import ResultCounter from "./ResultCounter";

export default function ControlsBar({ activeCategory, setActiveCategory, search, setSearch, showing, total }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <FilterButtons active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <SearchBar value={search} onChange={setSearch} />
        <ResultCounter showing={showing} total={total} />
      </div>
    </div>
  );
}
