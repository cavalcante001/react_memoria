import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";
import b7svg from "../../svgs/b7.svg";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackgroud={item.permanenteShown || item.shown}
      onClick={onClick}
    >
      {!item.permanenteShown && !item.shown && (
        <C.Icon src={b7svg} alt="" opacity={0.1} />
      )}
      {(item.permanenteShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};
