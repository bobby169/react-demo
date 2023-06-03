import { useState } from "react";

export default function StateObject() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  // 通过创建一个新对象来替换整个对象来更新对象
  // Replace state with a new object

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
