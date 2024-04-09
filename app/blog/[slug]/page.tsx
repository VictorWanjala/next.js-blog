import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{data.title}</h1>

        <div className="mt-8">
          <Image src={urlFor(data.titleImage).url()} width={800} height={800} alt="titleImage" className="rounded-lg" />
        </div>

        <div className="mt-8">
          <PortableText className="prose max-w-none" value={data.content} />
        </div>
      </div>
    </div>
  );
}

