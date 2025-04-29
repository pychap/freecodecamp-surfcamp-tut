import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  // path gets the data from Strapi
  const data = await getHomePage();
  console.log(data);
  if (!data) notFound();
  
  return { ...data.data };
}

// we then consume the data
export default async function HomeRoute() {
  const data = await loader();
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
