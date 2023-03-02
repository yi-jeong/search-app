'use client'

import { postDetailSetState, postListData } from "@/app/recoil/atom";
import { postDetailSelect } from "@/app/recoil/seletor";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";


const DetailBox = styled.div`
    padding: 2rem 0;

    .tit{
        padding:1rem 0;
        border-bottom: 1px solid #eee;
        font-size: 1.2rem;
        font-weight: 700;
    }

    .con{
        padding: 2rem 0;
        line-height: 1.5rem;
    }
`


export default function Detail(){

    const pathName= usePathname();

    const replaceID = () => {
        return Number(pathName.replace('/detail/', ""));
    }
    const selectID = useSetRecoilState(postDetailSetState);
    const list = useRecoilValue(postDetailSelect);

    useEffect(()=>{
        selectID(replaceID());
    },[])

    return (
        <DetailBox>
            <div className="container">
                {   list?.map( thisEl => {
                        return (
                            <dl key={thisEl.id}>
                                <dt className="tit">{thisEl.title}</dt>
                                <dd className="con">{thisEl.content}</dd>
                            </dl>
                        )
                    }) 
                }
            </div>
        </DetailBox>
        
    )
}