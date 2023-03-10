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
            name: "π μ μ²΄",
            value: "",
            active: true,
        },
        {
            id: 1,
            name: "πΆ κ°μμ§",
            value: "κ°μμ§",
            active: false,
        },
        {
            id: 2,
            name: "π± κ³ μμ΄",
            value: "κ³ μμ΄",
            active: false,
        },
        {
            id: 3,
            name: "π― νΈλμ΄",
            value: "νΈλμ΄",
            active: false,
        },
        {
            id: 4,
            name: "π° ν λΌ",
            value: "ν λΌ",
            active: false,
        },
        {
            id: 5,
            name: "πΌ ν¬λ",
            value: "ν¬λ",
            active: false,
        },
        {
            id: 6,
            name: "π΅ μμ­μ΄",
            value: "μμ­μ΄",
            active: false,
        },
        {
            id: 7,
            name: "πΉ νμ€ν°",
            value: "νμ€ν°",
            active: false,
        },
        {
            id: 8,
            name: "π₯ λ­&λ³μλ¦¬",
            value: "λ­&λ³μλ¦¬",
            active: false,
        },
        {
            id: 9,
            name: "π· λΌμ§",
            value: "λΌμ§",
            active: false,
        },
    ])

    const tagClick = (e:React.MouseEvent) => {
        let info = e.currentTarget.getAttribute("data-info") || "";

        /* 01. λͺ¨λ  κ°μ²΄ active false μ²λ¦¬ */
        setTagList(tagList.map( el => { 
            el.active = false
            return el;
        }))

        /* 02. click ν μμμ active λ³κ²½ */
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