import { HeroSection } from "@/components/blocks/HeroSection";
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
  const blocks = data?.blocks || [];
  console.log(data);
  return (
    <div>
      <HeroSection {...blocks[0]} />
    </div>
  );
}
