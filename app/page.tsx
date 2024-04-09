import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog']{
    publicationDate,
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        {/* Title and small text */}
        <div className="mb-2 col-span-full">
          <h1 className="text-3xl font-bold">The Accessibility Blog</h1>
          <p className="text-sm text-gray-500">The voice of the excluded</p>
        </div>

        {data.map((post, idx) => (
          <div key={idx} className="p-4">
            <Link href={`/blog/${post.currentSlug}`}>
              <div className="flex flex-col items-center">
                <Image src={urlFor(post.titleImage).url()} alt="image" width={500} height={500} className="rounded-lg" />
                <p className="font-bold mt-2">{post.publicationDate}</p>
                <h2 className="text-xl font-bold mt-2 line-clamp-2">{post.title}</h2>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600">{post.smallDescription}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}




