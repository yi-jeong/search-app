'use client'
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import useInputs from '@/app/hooks/useInput';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoSearchData, autoSearchFilterState, postListFilterState } from '@/app/recoil/atom';
import { autoSearchFilterDataState } from '@/app/recoil/seletor';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

    ul{
        li{
            padding: .3rem 0;
            cursor: pointer;
        }
    }
`

interface autoSearchDataType {
    id: number,
    name: string
}


export default function Search(){
    const autoList = useRecoilValue(autoSearchFilterDataState);
    const [searchFilter, setSearchFilter] = useRecoilState(autoSearchFilterState); 
    const [postFilterData, setPostFilterData] = useRecoilState(postListFilterState);
    const [buttonFilter, setButtonFilter] = useState<string>("");
    const [searchText, setSearchText] = useState<string | null | undefined>('');
    const [filterResult, setFilterResult] = useState(false);
    

    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
        !e.currentTarget.value? setFilterResult(false) : setFilterResult(true);

        setSearchText(e.currentTarget.value);
        setSearchFilter(e.currentTarget.value);  
    };

    const handleOnKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitEvent();
        }
      };

    const searchSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        submitEvent();
    }

    const submitEvent = () => {
        setPostFilterData( { searchFilter: (searchFilter), buttonFilter: (buttonFilter) });  
        setFilterResult(false);
    }

    const autoSearchClick = (e:React.MouseEvent) => {
        let target = e.currentTarget.textContent || "";

        setSearchFilter(target);
        setFilterResult(false);
    }

    const autoSearchRander = () => {
        return(
            <SearchExampleBox>
                <ul>     
                    {
                        autoList.length > 0 ?
                            autoList.map( data => {
                                return(
                                    <li key={data.id} onClick={autoSearchClick}>{data.name}</li>
                                )
                            })
                        :
                        <li>??????????????? ????????????.</li>
                    }                   
                </ul>
            </SearchExampleBox>
        )
    }

    return(
        <SearchBox>
            <div className="container">
                <div className="search">
                    <input value={searchFilter} type="text" className="search-bar" placeholder="???????????? ???????????????." onChange={onChangeData} onKeyPress={handleOnKeyPress} />
                    <button className="submit-button" type="button" onClick={searchSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                        <i className="fa fa-search"></i>
                    </button>
                    {
                        searchText && filterResult && autoSearchRander()
                    }
                </div>
            </div>
        </SearchBox>
    )
}