"use client";
import { FC, useState } from "react";
import scss from "./Admin.module.scss";
import { useCreateFsd } from "@/entities/requests/post";
const Admin: FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const createFsd = useCreateFsd();
  const handleAdd = () => {
    if (!name || !description) return alert("Все поля объязательны!");
    createFsd.mutate(
      { name, description },
      {
        onSuccess: (data) => {
          console.log("Создано:", data);
          setName("");
          setDescription("");
        },
        onError: (err) => {
          console.error("Ошибка при создании:", err);
        },
      },
    );
  };

  return (
    <section className={scss.Admin}>
      <div className="container">
        <div className={scss.content}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                return handleAdd();
              }
            }}
            type="text"
            placeholder="Name..."
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                return handleAdd();
              }
            }}
            type="text"
            placeholder="Description..."
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
