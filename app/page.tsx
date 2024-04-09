import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import CreateBlogForm from "./components/CreateBlogForm";

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

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        <div className="col-span-full">
          <h1 className="text-3xl font-bold mb-2">The Accessibility Blog</h1>
          <p className="text-sm text-gray-500 mb-4">The voice of the excluded</p>
        </div>

        {data.map((post, idx) => (
          <div key={idx} className="p-4">
            <Link href={`/blog/${post.currentSlug}`}>
              <div className="block rounded-lg overflow-hidden hover:shadow-lg">
                <div className="relative h-60">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold">{post.publicationDate}</p>
                  <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
                  <p className="line-clamp-3 text-sm text-gray-600">{post.smallDescription}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}





