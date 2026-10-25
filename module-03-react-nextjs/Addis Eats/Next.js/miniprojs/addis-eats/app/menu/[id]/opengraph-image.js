
import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { dishes } from "@/data/dishes";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { id } = await params;
  const dish = dishes.find((item) => item.id === id);

  if (!dish) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 70,
          background: "#fff7ed",
          color: "#9a3412",
        }}
      >
        <div style={{ fontSize: 34 }}>ADDIS EATS MENU</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 28 }}>
          {dish.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 24 }}>
          {dish.price} ETB
        </div>
        <div style={{ fontSize: 25, marginTop: 20 }}>
          Authentic Ethiopian flavors
        </div>
      </div>
    ),
    size
  );
}
