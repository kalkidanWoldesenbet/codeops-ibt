import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^09\d{8}$/.test(form.phone)) {
    errors.phone = "Enter a valid Ethiopian phone number.";
  }

  if (!form.area.trim()) {
    errors.area = "Area is required.";
  }

  if (!form.paymentMethod) {
    errors.paymentMethod = "Please select a payment method.";
  }

  return errors;
}

function Checkout() {
  const items = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clear);

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    paymentMethod: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);
  const paymentRef = useRef(null);

  const errors = validate(form);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const allTouched = {
      name: true,
      phone: true,
      area: true,
      paymentMethod: true,
    };

    setTouched(allTouched);

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameRef.current.focus();
      } else if (validationErrors.phone) {
        phoneRef.current.focus();
      } else if (validationErrors.area) {
        areaRef.current.focus();
      } else if (validationErrors.paymentMethod) {
        paymentRef.current.focus();
      }

      return;
    }

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitting(false);
    setSubmitted(true);

    clear();
  }

  function showError(field) {
    return touched[field] && errors[field];
  }

  if (submitted) {
    return (
      <section>
        <h2>Order Confirmed!</h2>
        <p>Your order has been placed successfully.</p>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/cart">Back to Cart</Link>
        </>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">Name</label>

            <input
              ref={nameRef}
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("name") ? "true" : "false"}
              aria-describedby={
                showError("name") ? "name-error" : undefined
            }
            />

            {showError("name") && (
              <p id="name-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone">Phone</label>

            <input
              ref={phoneRef}
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("phone") ? "true" : "false"}
              aria-describedby={
                showError("phone") ? "phone-error" : undefined
              }
            />

            {showError("phone") && (
              <p id="phone-error" role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="area">Area</label>

            <input
              ref={areaRef}
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={showError("area") ? "true" : "false"}
              aria-describedby={
                showError("area") ? "area-error" : undefined
              }
            />

            {showError("area") && (
              <p id="area-error" role="alert">
                {errors.area}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="paymentMethod">
              Payment Method
            </label>

            <select
              ref={paymentRef}
              id="paymentMethod"
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={
                showError("paymentMethod") ? "true" : "false"
              }
              aria-describedby={
                showError("paymentMethod")
                  ? "paymentMethod-error"
                  : undefined
              }
            >
              <option value="">Select payment method</option>
              <option value="TeleBirr">TeleBirr</option>
              <option value="Cash">Cash on Delivery</option>
            </select>

            {showError("paymentMethod") && (
              <p id="paymentMethod-error" role="alert">
                {errors.paymentMethod}
              </p>
            )}
          </div>

          <button type="submit" disabled={submitting}>
            {submitting
              ? "Processing..."
              : `Place Order - ${total} ETB`}
          </button>
        </form>
      )}
    </section>
  );
}

export default Checkout;