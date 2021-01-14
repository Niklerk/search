import { keys } from "../config/keys";

export const fetchGoogle = async (searchText) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${keys.google}&cx=${keys.cx}&q=${searchText}`
  );
  const { items } = await response.json();
  return items;
};

export const fetchBing = async (searchText) => {
  const response = await fetch(
    `https://api.bing.microsoft.com/v7.0/search?q=${searchText}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": keys.bing,
      },
    }
  );
  const { webPages } = await response.json();
  return webPages.value;
};
