'use client'
import styled from '@emotion/styled';

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

const SearchBox = styled.div`
    padding: 3rem 0 2rem;

    .search{ 
        display: flex; 
        align-items: center; 
        border-bottom: 3px solid #ffb774; 
    
        .search-bar{ 
            padding: 0 2rem; 
            border: transparent; 
            width: calc( 100% - 4rem - 65px ); height: 50px;
        }

        .submit-button{ 
            width: 60px; height: 50px; 
            font-size: 1.2rem; color: #777; 
            background: transparent; 
            border: transparent; 
        }
    }
`

const HashtagBox = styled.div`
    .hashtag-list{ 
        display: flex; gap: .5rem; flex-wrap: wrap; 

        .hashtag{ 
            padding: .3rem 1rem; 
            background: #eaeaea;
            border: transparent; 
            border-radius: 50px; 
            font-size: .9rem; 
            font-weight: 300; 
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
            <SearchBox>
                <div className="container">
                    <div className="search">
                        <input type="text" className="search-bar" placeholder="검색어를 입력하세요." />
                        <button className="submit-button" type="button"><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </SearchBox>
            <HashtagBox>
                <div className="container">
                    <ul className="hashtag-list">
                        <li><button className="hashtag" type="button">🐶 강아지</button></li>
                        <li><button className="hashtag" type="button">🐱 고양이</button></li>
                        <li><button className="hashtag" type="button">🐯 호랑이</button></li>
                        <li><button className="hashtag" type="button">🐰 토끼</button></li>
                        <li><button className="hashtag" type="button">🐼 팬더</button></li>
                        <li><button className="hashtag" type="button">🐵 원숭이</button></li>
                        <li><button className="hashtag" type="button">🐹 햄스터</button></li>
                        <li><button className="hashtag" type="button">🐥 닭&병아리</button></li>
                        <li><button className="hashtag" type="button">🐷 돼지</button></li>
                    </ul>
                </div>
            </HashtagBox>
        </HeaderBox>
    )
}