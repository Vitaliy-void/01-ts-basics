import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});