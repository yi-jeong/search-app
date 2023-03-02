import { autoSearchFilterState, postListFilterState } from "@/app/recoil/atom";
import { css } from "@emotion/react";
import styled from "@emotion/styled"
import React, { useState } from "react"
import { useRecoilState } from "recoil";


const HashtagBox = styled.div`
.hashtag-list{ 
    display: flex; gap: .5rem; flex-wrap: wrap; 

    .hashtag{ 
        padding: .3rem 1rem; 
        background: #eaeaea;
        border: 2px solid #eaeaea; 
        border-radius: 50px; 
        font-size: .9rem; 
        font-weight: 300; 
    
    }
}
`

const HashtagButton = styled.button<{active:boolean}>`
    padding: .3rem 1rem; 
    background: #eaeaea;
    border: transparent; 
    border-radius: 50px; 
    font-size: .9rem; 
    font-weight: 300; 

    ${(props) => 
        props.active &&
        css`
            border: 2px solid #ffb774 !important;
            background: #ffb774 !important;
            color: #fff !important;
            font-weight: 700 !important;
        `
    };
`

export default function HashTag(){

    const [postFilterData, setPostFilterData] = useRecoilState(postListFilterState);
    const [tagList, setTagList] = useState([
        {
            id: 0,
            name: "🌏 전체",
            value: "",
            active: true,
        },
        {
            id: 1,
            name: "🐶 강아지",
            value: "강아지",
            active: false,
        },
        {
            id: 2,
            name: "🐱 고양이",
            value: "고양이",
            active: false,
        },
        {
            id: 3,
            name: "🐯 호랑이",
            value: "호랑이",
            active: false,
        },
        {
            id: 4,
            name: "🐰 토끼",
            value: "토끼",
            active: false,
        },
        {
            id: 5,
            name: "🐼 팬더",
            value: "팬더",
            active: false,
        },
        {
            id: 6,
            name: "🐵 원숭이",
            value: "원숭이",
            active: false,
        },
        {
            id: 7,
            name: "🐹 햄스터",
            value: "햄스터",
            active: false,
        },
        {
            id: 8,
            name: "🐥 닭&병아리",
            value: "닭&병아리",
            active: false,
        },
        {
            id: 9,
            name: "🐷 돼지",
            value: "돼지",
            active: false,
        },
    ])

    const tagClick = (e:React.MouseEvent) => {
        let info = e.currentTarget.getAttribute("data-info") || "";

        /* 01. 모든 객체 active false 처리 */
        setTagList(tagList.map( el => { 
            el.active = false
            return el;
        }))

        /* 02. click 한 요소의 active 변경 */
        setTagList(tagList.map(el => el.value == info ? { ...el, active: !el.active } : el ))

        setPostFilterData( { searchFilter: (postFilterData.searchFilter), buttonFilter: (info) })
    }

    return(
        <HashtagBox>
            <div className="container">
                <ul className="hashtag-list">
                    {
                        tagList.map( el => <li key={el.id}><HashtagButton active={el.active} className="hashtag" type="button" data-info={el.value} onClick={tagClick}>{el.name}</HashtagButton></li> )
                    }
                </ul>
            </div>
        </HashtagBox>
    )
}