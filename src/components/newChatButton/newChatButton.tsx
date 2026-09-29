import style from "./newChatButton.module.css";
import { AddContactForm } from "../addContactForm/addContactForm";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useOnClickOutside";

export const NewChatbutton = ({ onSubmit }: { onSubmit: (phone: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className={style.wrapper} ref={ref}>
      <button className={style.new_chat_btn} type="button" onClick={() => setIsOpen((o) => !o)}>
        <Pencil className={style.icon_btn} />
      </button>
      <AddContactForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(phone) => {
          onSubmit(phone);
          setIsOpen(false);
        }}
      />
    </div>
  );
};
export default NewChatbutton;
