import { notFound } from "next/navigation";

const services = {
  "app-dev": {
    title: "Application development",
    description:
      "Thoughtful digital experiences, designed around the people who use them.",
  },
  "web-dev": {
    title: "Web development",
    description:
      "Clear, welcoming websites built to make the everyday online experience better.",
  },
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = services[id];

  return service ? { title: service.title, description: service.description } : {};
}

export default async function ServiceDetail({ params }) {
  const { id } = await params;
  const service = services[id];

  if (!service) {
    notFound();
  }

  return (
    <>
      <p className="eyebrow">What we do</p>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </>
  );
}