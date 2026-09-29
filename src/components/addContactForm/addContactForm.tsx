// Модалка для добавления пользователя
// Импорты
import { useState, type SyntheticEvent } from "react";
import style from "./addContactForm.module.css";

// Пропсы
interface AddContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phone: string) => void;
}

export const AddContactForm = ({
  isOpen,
  onClose,
  onSubmit,
}: AddContactFormProps) => {
  // Состояние формы
  const [phone, setPhone] = useState("");

  // Удаление пробелов из текста
  const clearSimbol = phone.replace(/\D/g, "");
  const isEmpty = clearSimbol.length === 0;

  // Управление отправкой
  const handleSubmitPhone = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty) return;
    onSubmit(clearSimbol);
    setPhone("");
  };

  if (!isOpen) return null;

  return (
    <div className={style.overlay} onClick={onClose}>
      <form
        className={style.ACF_form}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmitPhone}
      >
        <div className={style.ACF_header}>
          <span className={style.ACF_text_form}>
            Create new chat with your contacts
          </span>
          <button
            type="button"
            className={style.ACF_close_btn}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        <input
          className={style.input_form_ACF}
          type="tel"
          value={phone}
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className={style.ACF_btn_form} type="submit" disabled={isEmpty}>
          Add
        </button>
      </form>
    </div>
  );
};
