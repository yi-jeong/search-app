'use client'
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useInputs from '@/hooks/useInput';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoSearchData, autoSearchFilterState } from '@/recoil/atom';
import { autoSearchFilterDataState } from '@/recoil/seletor';

const SearchBox = styled.div`
    padding: 3rem 0 2rem;

    .search{ 
        position: relative;
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

const SearchExampleBox = styled.div`
    position: absolute;
    bottom: -3px;
    transform: translateY(100%);
    padding: 1rem;
    width:calc( 100% - 2rem );
    background: #fff;
    border-bottom: 1px solid #ddd;
`

interface autoSearchDataType {
    id: number,
    name: string
}


export default function Search(){
    const setAutoSearchDatas = useSetRecoilState(autoSearchData);
    const autoList = useRecoilValue(autoSearchFilterDataState);
    const [filter, setFilter] = useRecoilState(autoSearchFilterState); 
    const [searchText, setSearchText] = useState<string | null | undefined>('');
    

    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
        setFilter(e.currentTarget.value);  
        console.log(autoList);
        console.log(filter);
    };

    const dataInit = () => {
        fetch('/json/SearchDatas.json',{
            method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
            setAutoSearchDatas(data);
        })
    }

    const autoSearchRander = () => {
        return(
            <SearchExampleBox>
                <ul>     
                    {
                        autoList.length > 0 ?
                            autoList.map( data => {
                                return(
                                    <li key={data.id}>{data.name}</li>
                                )
                            })
                        :
                        <li>검색결과가 없습니다.</li>
                    }                   
                </ul>
            </SearchExampleBox>
        )
    }

    useEffect(()=>{
        dataInit();
    }, [])

    return(
        <SearchBox>
            <div className="container">
                <div className="search">
                    <input type="text" className="search-bar" placeholder="검색어를 입력하세요." onChange={onChangeData} />
                    <button className="submit-button" type="button"><i className="fa fa-search"></i></button>
                    {
                        searchText && autoSearchRander()
                    }
                </div>
            </div>
        </SearchBox>
    )
}