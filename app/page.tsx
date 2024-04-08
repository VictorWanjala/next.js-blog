import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";

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
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
        <div key={idx} className="p-4">
          <Image src={urlFor(post.titleImage).url()} alt="image" width={500} height={500} />
          <h2 className="text-xl font-bold mt-2">{post.title}</h2>
          <p>{post.smallDescription}</p>
        </div>
      ))}
    </div>
  );
}
