import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import ControlsBar from "./components/ControlsBar";
import GalleryGrid from "./components/GalleryGrid";
import NoResults from "./components/NoResults";
import componentsData from "./data/components.json";
import { filterAndSearch } from "./utils/filterAndSearch";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [appColor, setAppColor] = useState(() => {
    return localStorage.getItem("app_color") || "#6366f1";
  });

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 180);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    document.documentElement.style.setProperty("--brand-color", appColor);
    localStorage.setItem("app_color", appColor);
  }, [appColor]);

  const total = componentsData.length;
  const filtered = useMemo(
    () => filterAndSearch(componentsData, activeCategory, debouncedQuery),
    [activeCategory, debouncedQuery]
  );

  const resetAll = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full p-4 flex-1">
        <Header />
        <div className="mt-4">
          <ControlsBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            search={searchQuery}
            setSearch={setSearchQuery}
            showing={filtered.length}
            total={total}
          />
        </div>

        <main className="mt-6">
          {filtered.length === 0 ? (
            <NoResults onReset={resetAll} />
          ) : (
            <GalleryGrid items={filtered} onColorSelect={(c) => setAppColor(c)} />
          )}
        </main>

        <footer className="mt-8 py-6 text-sm text-gray-500">
          Built for Module 2 Capstone — demonstrates React fundamentals.
        </footer>
      </div>
    </div>
  );
}
