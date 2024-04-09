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
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {data.map((post, idx) => (
          <div key={idx} className="p-4">
            <Link href={`/blog/${post.currentSlug}`}>
              <Image src={urlFor(post.titleImage).url()} alt="image" width={500} height={500} />
              <p className="font-bold mt-2">{post.publicationDate}</p>
              <h2 className="text-xl font-bold mt-2 line-clamp-2">{post.title}</h2>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600" >{post.smallDescription}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

