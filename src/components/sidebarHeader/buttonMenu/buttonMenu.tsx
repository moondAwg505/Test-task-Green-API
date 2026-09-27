import style from "./buttonMenu.module.css";
import { useState } from "react";
import { useClickOutside } from "../../../hooks/useOnClickOutside";
import { Menu } from "lucide-react";
import { UserMenu } from "./userMenu";

export const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className={style.wrapper} ref={ref}>
      <button
        className={style.button_menu}
        type="button"
        onClick={() => setIsOpen((op) => !op)}
        aria-label="Меню"
        aria-expanded={isOpen}
      >
        <Menu className={style.menu} />
      </button>
      <UserMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ButtonMenu;
