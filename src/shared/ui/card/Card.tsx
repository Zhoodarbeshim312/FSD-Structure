import { FC } from "react";
import scss from "./Card.module.scss";
import { MdOutlineChangeCircle } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FSD } from "@/shared/types/types";
import { useDeleteFsd } from "@/entities/requests/delete";
import { useUpdateFsd } from "@/entities/requests/patch";
interface CardProps {
  el: FSD.FSDItem;
}
const Card: FC<CardProps> = ({ el }) => {
  const deleteFsd = useDeleteFsd();
  const updateFsd = useUpdateFsd();
  const handleDelete = () => {
    deleteFsd.mutate(el._id);
  };
  const handleUpdate = () => {
    const newName = prompt("Введите новое имя", el.name);
    const newDesc = prompt("Введите новое описание", el.description);
    if (newName && newDesc) {
      updateFsd.mutate({ ...el, name: newName, description: newDesc });
    }
  };
  return (
    <div className={scss.card}>
      <h1>{el.name}</h1>
      <p>{el.description}</p>
      <button className={scss.change} onClick={handleUpdate}>
        <MdOutlineChangeCircle />
      </button>
      <button className={scss.delete} onClick={handleDelete}>
        <TiDeleteOutline />
      </button>
    </div>
  );
};
export default Card;
