import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/dzD1mYpXt21S8z19rPFe29fl1iydrX3NJ5HGLt7cA4wxYbIZ",
  // "https://utfs.io/f/dzD1mYpXt21SxQwj6FGIevKZw6Dj3UQFXuYfqpPB4yWi7tH5",
  // "https://utfs.io/f/dzD1mYpXt21SjDbc3082aSGh4ibTZWBrA1xJRLmH7MqcEnlp",
  "https://utfs.io/f/dzD1mYpXt21Sv3y4cuCcylgI1pQxvrNnmH36R49GtbM7eKBF",
  "https://utfs.io/f/dzD1mYpXt21SSTzKj5rxXWCO0e3VlKJpGzsNFqAtRM1fZEak",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello, welcome
    </main>
  );
}
