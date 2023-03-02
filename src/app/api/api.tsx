import { cache, use, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { autoSearchData, postListData } from "../recoil/atom";

// const getPostList = cache(async()=>{
//     let res = await fetch("/json/PostListDatas.json", { method: 'GET' });
//     return res.json();
// })

export default function DataInit(){

    //const data = use(getPostList());
    const setPostData = useSetRecoilState(postListData);

    const setAutoSearchDatas = useSetRecoilState(autoSearchData);

    const dataSearchInit = () => {
        fetch('/json/SearchDatas.json',{
            method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
            setAutoSearchDatas(data);
        })
    }

    const dataPostInit = () => {
        fetch('/json/PostListDatas.json',{
            method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
            setPostData(data);
        })
    }


    useEffect(()=>{
        dataSearchInit();
        dataPostInit();
        //setPostData(data); 
    },[])

    return <></>
}