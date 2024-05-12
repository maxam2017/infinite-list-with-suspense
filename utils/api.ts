interface ResponseData {
  current_page: number;
  limit: number;
  next_page?: number;
  previous_page: number;
  results: { id: string; joke: string }[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}

async function _fetchJokes(page: number): Promise<{
  nextPage?: number;
  items: { id: string; joke: string }[];
}> {
  // https://icanhazdadjoke.com/api#search-for-dad-jokes
  const res = await fetch(`https://icanhazdadjoke.com/search?page=${page}`, {
    headers: { accept: "application/json" },
  });

  if (res.ok) {
    const data = await res.json<ResponseData>();
    return {
      nextPage: data.next_page,
      items: data.results,
    };
  } else {
    throw new Error("Failed to fetch jokes");
  }
}

const promiseMap: Record<number, ReturnType<typeof _fetchJokes>> = {};

export function fetchJokes(page: number) {
  if (!promiseMap[page]) {
    promiseMap[page] = _fetchJokes(page);
  }

  return promiseMap[page];
}
