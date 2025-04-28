async function loader() {
  // path gets the data from Strapi
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);

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
