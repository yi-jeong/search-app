import { cache, use, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { postListData } from "../recoil/atom";

const getPostList = cache(async()=>{
    let res = await fetch("/json/PostListDatas.json", { method: 'GET' });
    return res.json();
})


export default function DataInit(){

    const data = use(getPostList());
    const setPostData = useSetRecoilState(postListData);


    useEffect(()=>{
        setPostData(data); 
    },[])

    return <></>
}