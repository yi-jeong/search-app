'use client'
import { PostInfo, postListData } from '@/app/recoil/atom';
import { postListFilterDataState } from '@/app/recoil/seletor';
import styled from '@emotion/styled';
import { cache, use, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Post from './post';

const PostListWrap = styled.div`
    padding: 2rem 0;
    
`

const PostListBox = styled.ul`
    display: flex; 
    flex-wrap: wrap;
`

const getPostList = cache(async()=>{
    let res = await fetch("/json/PostListDatas.json", { method: 'GET' });
    
    return res.json();
})

export default function PostList(){


    const postList = useRecoilValue(postListFilterDataState);


    return(
        <PostListWrap>
            <div className="container">
                <PostListBox>
                    { postList?.map( info => {
                        return <Post key={info.id} info ={info}/>
                    }) }
                </PostListBox>
            </div>
        </PostListWrap>
    )
}


