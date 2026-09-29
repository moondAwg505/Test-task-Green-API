import { Send } from "lucide-react";
import style from "./messageInput.module.css";
import { useState, type SyntheticEvent } from "react";

export const MessageInput = ({
  onSend,
}: {
  onSend: (text: string) => void;
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input_form}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message"
      />
      <button className={style.btn_from} type="submit" aria-label="Отправить">
        <Send className={style.ion_btn} />
      </button>
    </form>
  );
};
