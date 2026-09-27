import style from "./userMenu.module.css";
import { Plus } from "lucide-react";
import { User } from "lucide-react";

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserMenu = ({ isOpen, onClose }: UserMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className={style.wrapper_menu} role="menu">
      <button className={style.button} onClick={onClose}>
        <User className={style.icon_btn} />
        Profile
      </button>
      <button className={style.button} onClick={onClose}>
        <Plus className={style.icon_btn} />
        Add Account
      </button>
    </div>
  );
};

export default UserMenu;
