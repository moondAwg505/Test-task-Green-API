import style from "./buttonMenu.module.css";
import { useState } from "react";
import { Menu } from "lucide-react";

export const ButtonMenu = () => {
  const [ isOpen, setIsOpen] = useState(false)
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return <Menu className={style.menu} aria-label="Меню" />;
};

export default ButtonMenu;
