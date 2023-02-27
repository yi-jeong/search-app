'use client'
import { postListData } from '@/recoil/atom';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import Post from './post';

const PostListWrap = styled.div`
    padding: 2rem 0;
    
`

const PostListBox = styled.ul`
    display: flex; 
    flex-wrap: wrap;
`


const postDatas = [
    {
        id: 0,
        title: "강아지 입양 전, 알아야할 사실",
        content: "개는 중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대예요. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔어요."
    },
    {
        id: 1,
        title: "반려인이라면 꼭 알아야 할 동물보호법",
        content: "잠깐의 실수로 강아지가 집을 나가버렸을 때, 반려인의 정보가 담긴 인식표는 상당한 도움이 된답니다. ▷어떤 인식표를 착용해야 할까? ①가벼워야 합니다. ②"
    },
    {
        id: 2,
        title: "토끼의 특징, 무엇이 있을까요?",
        content: "토끼는 초식동물로, 보통 '귀가 길고 앞발은 짧고 뒷발은 길어 깡충깡충 뛰어다니는' 동물로 묘사됩니다. 동요나 만화영화의 소재가 될 정도로 친숙한 동물이기도 해요."
    },
    {
        id: 3,
        title: "강아지 입양 전, 알아야할 사실",
        content: "개는 중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대예요. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔어요."
    },
    {
        id: 4,
        title: "반려인이라면 꼭 알아야 할 동물보호법",
        content: "잠깐의 실수로 강아지가 집을 나가버렸을 때, 반려인의 정보가 담긴 인식표는 상당한 도움이 된답니다. ▷어떤 인식표를 착용해야 할까? ①가벼워야 합니다. ②"
    },
    {
        id: 5,
        title: "토끼의 특징, 무엇이 있을까요?",
        content: "토끼는 초식동물로, 보통 '귀가 길고 앞발은 짧고 뒷발은 길어 깡충깡충 뛰어다니는' 동물로 묘사됩니다. 동요나 만화영화의 소재가 될 정도로 친숙한 동물이기도 해요."
    },
    {
        id: 6,
        title: "강아지 입양 전, 알아야할 사실",
        content: "개는 중형 동물이자 가장 널리 분포하며 개체 수가 가장 많은 지상 동물 중 하나이며 가축화한 회색늑대예요. 개는 인류가 최초로 가축으로 삼은 동물로 알려져 있으며, 역사적으로 반려견, 사냥견으로서 길러 왔어요."
    },
    {
        id: 7,
        title: "반려인이라면 꼭 알아야 할 동물보호법",
        content: "잠깐의 실수로 강아지가 집을 나가버렸을 때, 반려인의 정보가 담긴 인식표는 상당한 도움이 된답니다. ▷어떤 인식표를 착용해야 할까? ①가벼워야 합니다. ②"
    },
    {
        id: 8,
        title: "토끼의 특징, 무엇이 있을까요?",
        content: "토끼는 초식동물로, 보통 '귀가 길고 앞발은 짧고 뒷발은 길어 깡충깡충 뛰어다니는' 동물로 묘사됩니다. 동요나 만화영화의 소재가 될 정도로 친숙한 동물이기도 해요."
    },
]

export default function PostList(){
    const [postData, setPostData] = useRecoilState(postListData);

    useEffect(function(){
        setPostData(postDatas); 
    },[]);

    return(
        <PostListWrap>
            <div className="container">
                <PostListBox>
                    { postData?.map( info => {
                        return <Post key={info.id} info ={info}/>
                    }) }
                </PostListBox>
            </div>
        </PostListWrap>
    )
}