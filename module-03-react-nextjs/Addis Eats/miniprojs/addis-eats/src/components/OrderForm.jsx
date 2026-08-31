import { useState } from "react";

function OrderForm() {
  const [formData, setFormData] =useState({
    name: "",
    phone: "",
    area: "",
  });

  const [phoneValid, setPhoneValid] = useState(false);  

  
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "phone") {
      const valid =
        /^(09\d{8}|\+2519\d{8})$/.test(value);

      setPhoneValid(valid);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delivery Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
        <br /><br />
      <input
        type="text"
        name="phone"
        placeholder="TeleBirr Number"
        value={formData.phone}
        onChange={handleChange}
      />

      {formData.phone && !phoneValid && (
        <p>Invalid TeleBirr number</p>
      )}
        <br /><br />
      <input
        type="text"
        name="area"
        placeholder="Area"
        value={formData.area}
        onChange={handleChange}
      />

      <button type="submit" disabled={!phoneValid}>
        Submit
      </button>
    </form>
  );
}

export default OrderForm;
