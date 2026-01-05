export function filterAndSearch(components, activeCategory, searchQuery) {
  const q = (searchQuery || "").trim().toLowerCase();
  return components.filter((c) => {
    const categoryMatch =
      !activeCategory || activeCategory === "All" || c.category === activeCategory;
    if (!categoryMatch) return false;
    if (!q) return true;
    const name = (c.name || "").toLowerCase();
    const desc = (c.description || "").toLowerCase();
    return name.includes(q) || desc.includes(q);
  });
}
