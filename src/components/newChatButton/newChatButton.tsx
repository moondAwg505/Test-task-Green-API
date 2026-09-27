import style from "./newChatButton.module.css";
import { Pencil } from "lucide-react";

export const NewChatbutton = () => {
  return (
    <button className={style.new_chat_btn} type="button">
      <Pencil className={style.icon_btn} />
    </button>
  );
};
export default NewChatbutton;
