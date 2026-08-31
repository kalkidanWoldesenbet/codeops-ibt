export async function getDishes(category, signal) {
  const response = await fetch("/dishes.json", {
    signal,
  });

  if (!response.ok){
    throw new Error("Could not load the menu. Please try again.");
  }

  const data = await response.json();

  if (category === "All"){
    return data.items;
  }

  return data.items.filter(
    (item) => item.category === category
  );

}