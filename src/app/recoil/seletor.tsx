import { selector } from "recoil";
import { autoSearchData, autoSearchDataType, autoSearchFilterState, postDetailSetState, PostInfo, postListData, postListFilterState } from "./atom";

export const postListFilterDataState = selector<PostInfo[]>({
    key: "postListFilterDataState",
    get: ({ get }) => {
        const filter = get(postListFilterState);
        const list = get(postListData);
  
        if(!filter){
            return list;
        }

        return list.filter((el:PostInfo) => el.title.includes(filter));
    },
});

export const autoSearchFilterDataState = selector<autoSearchDataType[]>({
    key: "autoSearchFilterDataState",
    get: ({ get }) => {
        const filter = get(autoSearchFilterState);
        const list = get(autoSearchData);
  
        if(!filter){
            return list;
        }

        return list.filter((el:autoSearchDataType) => el.name.includes(filter));
    },
});

export const postDetailSelect = selector<PostInfo[]>({
    key: 'postDetailSelect',
    get: ({get}) => {
        const selectId = get(postDetailSetState);
        const list = get(postListData);

        const result = list.filter((el:PostInfo) => el.id == selectId);

        return result;
    }
})