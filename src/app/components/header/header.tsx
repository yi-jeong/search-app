'use client'
import styled from '@emotion/styled';
import HashTag from './hashTag';
import Search from './search';

const HeaderBox = styled.header`
    padding: 2rem 0; 
    box-shadow: 0 0 1rem .5rem rgb(0, 0, 0, 0.05); 
`

const HeaderTitle = styled.div`

    h1{
        font-size: 2.3rem; 
        line-height: 2.6rem; 
        letter-spacing: -1px; 
        font-weight: 300; 
        white-space: pre-line;

        .point{
            display: inline-block; 
            margin-bottom: 1rem;
        }

        .marker{
            position: relative; 
            display: inline-block; 
            font-weight: 700;
    
            &:after{
                content: ""; 
                position: absolute; 
                z-index: -1; 
                bottom:0px; 
                left:0; 
                width: 100%; 
                height: 8px; 
                background: #ffb774;
            }
        }
    }
`




export default function Header(){
    return(
        <HeaderBox>
            <HeaderTitle>
                <div className="container">
                    <h1><span className="point">🧐</span><br/>
                        궁금한 게 있다면<br/>
                        <span className="marker">무엇이든 검색</span>해보세요!
                    </h1>
                </div>
            </HeaderTitle>
            <Search />
            <HashTag />
        </HeaderBox>
    )
}