import { getSession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const session = await getSession();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { id } = await params;
  const order = (globalThis.orders ?? []).find(
    (entry) => entry.id === id && entry.userId === session.userId
  );

  if (!order) {
    return new Response("Order not found", { status: 404 });
  }

  const encoder = new TextEncoder();
  let interval;

  const stream = new ReadableStream({
    start(controller) {
      const send = () => {
        const currentOrder = (globalThis.orders ?? []).find(
          (entry) => entry.id === id && entry.userId === session.userId
        );

        if (!currentOrder) {
          controller.enqueue(
            encoder.encode(`event: error\ndata: ${JSON.stringify({ message: "Order not found" })}\n\n`)
          );
          clearInterval(interval);
          controller.close();
          return;
        }

        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({
            id: currentOrder.id,
            status: currentOrder.status,
            createdAt: currentOrder.createdAt,
            neighbourhood: currentOrder.neighbourhood,
          })}\n\n`)
        );
      };

      send();
      interval = setInterval(send, 3000);

      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        try {
          controller.close();
        } catch {}
      }, { once: true });
    },
    cancel() {
      clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
