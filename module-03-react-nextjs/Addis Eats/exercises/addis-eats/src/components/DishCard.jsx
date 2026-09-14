import { memo, useState } from "react";
import Modal from "./Ui/Modal";

function DishCard({ dish, onAdd }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <article>
      <h3>{dish.name}</h3>

      <p>{dish.description}</p>

      <p>
        <strong>{dish.price} ETB</strong>
      </p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <button onClick={() => onAdd(dish)}>
        Add to Cart
      </button>

      <button onClick={() => setShowModal(true)}>
        View Details
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <p>{dish.price} ETB</p>

          {dish.spicy && <p>🌶️ Spicy</p>}
        </Modal>
      )}
    </article>
  );
}

export default memo(DishCard);