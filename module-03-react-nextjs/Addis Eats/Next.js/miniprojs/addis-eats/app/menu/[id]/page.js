
import { notFound } from "next/navigation";
import { dishes } from "@/data/dishes";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-production-domain.com";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    return { title: "Dish Not Found" };
  }

  return {
    title: dish.name,
    description: `${dish.description} Order ${dish.name} for ${dish.price} ETB at Addis Eats.`,
    alternates: {
      canonical: `/menu/${dish.id}`,
    },
    openGraph: {
      type: "website",
      title: `${dish.name} - Addis Eats`,
      description: dish.description,
      url: `/menu/${dish.id}`,
      images: [
        {
          url: `/menu/${dish.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${dish.name} from Addis Eats`,
        },
      ],
    },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = dishes.find((item) => item.id === id);

  if (!dish) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    image: new URL(dish.image, siteUrl).href,
    offers: {
      "@type": "Offer",
      price: String(dish.price),
      priceCurrency: "ETB",
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="mb-4 text-4xl font-bold">{dish.name}</h1>
      <p className="mb-4">{dish.description}</p>
      <p className="text-xl font-semibold">{dish.price} ETB</p>
    </main>
  );
}
