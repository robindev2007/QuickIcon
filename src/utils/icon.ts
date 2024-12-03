import { luIconList } from "@/constant/icons";

export const searchIcons = (searchText: string) => {
  const keywords = searchText.toLowerCase().split(/\s+/); // Split searchText into keywords
  return luIconList
    .map((item) => {
      const lowerItem = item.toLowerCase();
      // Calculate a score based on keyword matches
      let score = 0;
      for (const keyword of keywords) {
        if (lowerItem.includes(keyword)) {
          score += keyword.length; // Reward longer matches
          if (lowerItem.startsWith(keyword)) score += 5; // Boost score for prefix match
        }
      }
      return { item, score };
    })
    .filter(({ score }) => score > 0) // Keep only matches
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .map(({ item }) => item);
};
