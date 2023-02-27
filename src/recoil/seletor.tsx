import { selector } from "recoil";
import { autoSearchData, autoSearchDataType, autoSearchFilterState } from "./atom";

export const autoSearchFilterDataState = selector<autoSearchDataType[]>({
    key: "filterTodoState",
    get: ({ get }) => {
        const filter = get(autoSearchFilterState);
        const list = get(autoSearchData);
  
        if(!filter){
            return list;
        }

        return list.filter((el:autoSearchDataType) => el.name.includes(filter));
    },
});