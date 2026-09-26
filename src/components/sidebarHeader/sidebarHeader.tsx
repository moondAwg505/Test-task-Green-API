import style from "./sidebarHeader.module.css";
import { ButtonMenu } from "./buttonMenu/buttonMenu";
import { SearchInput } from "./searchinput/searchinput";

export const SidebarHeader = () => {
  return (
    <div className={style.wrapper}>
      <ButtonMenu />
      <SearchInput />
    </div>
  );
};

export default SidebarHeader;
