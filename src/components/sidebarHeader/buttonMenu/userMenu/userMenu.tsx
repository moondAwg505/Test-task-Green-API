import style from "./userMenu.module.css";
import { Plus } from "lucide-react";
import { User } from "lucide-react";

export const UserMenu = () => {
  return (
    <div className={style.wrapper_menu}>
      <button className={style.button}>
        <User className={style.icon_btn} />
        Profile
      </button>
      <button className={style.button}>
        <Plus className={style.icon_btn} />
        Add Account
      </button>
    </div>
  );
};

export default UserMenu;
