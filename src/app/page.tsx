import Link from "next/link";

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
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello, welcome 
    </main>
  );
}
