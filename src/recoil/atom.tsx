import { atom, selector } from "recoil";

export interface PostInfo {
    id: number,
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
    default: "",
});

export const autoSearchData = atom<autoSearchDataType[]>({
    key: 'autoSearchData',
    default: []
});

export const autoSearchFilterState = atom({
    key: "autoSearchFilterState",
    default: "",
});

