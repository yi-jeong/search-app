
'use client'
import styled from '@emotion/styled';
import { PostInfo } from './postList';

const PostBox = styled.li`
    padding: 1.5rem 1rem; 
    width: calc( 100% - 2rem ); 
    border-bottom: 1px solid #f5f5f5;

    .title{ 
        font-size: 1.3rem; 
        font-weight: 700; 
    }

    .title + .content{ 
        margin-top: .5rem; 
        color: #555;
    }

    .content{ 
        overflow: hidden; 
        font-weight: 300; 
        white-space: nowrap; 
        text-overflow: ellipsis; 
    }
`

type InfoProps = {
    info : PostInfo
}

export default function Post({ info }:InfoProps){

    const {id, title, content} = info

    return(
        <PostBox>
            <dl>
                <dt className="title">{info.title}</dt>
                <dd className="content">
                    {info.content}
                </dd>
            </dl>
        </PostBox>
    )
}