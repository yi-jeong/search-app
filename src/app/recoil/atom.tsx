import { atom, selector } from "recoil";

export interface PostInfo {
    id: number,
    tag: string,
    title: string,
    content: string
}

export interface autoSearchDataType {
    id: number,
    name: string
}

export const postListData = atom<PostInfo[]>({
    key: 'postListData',
    default: [],
});

export const postListFilterState = atom({
    key: "postListFilterState",
    default: { searchFilter: "", buttonFilter: "" },
});

export const autoSearchData = atom<autoSearchDataType[]>({
    key: 'autoSearchData',
    default: []
});

export const autoSearchFilterState = atom({
    key: "autoSearchFilterState",
    default: "",
});

export const postDetailData = atom<PostInfo[]>({
    key: 'postDetailData',
    default: []
})

export const postDetailSetState = atom({
    key: 'postDetailSetState',
    default: 0
})
