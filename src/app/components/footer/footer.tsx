'use client'
import styled from '@emotion/styled';

const FooterBox = styled.footer`
    margin-top: 3rem; 
    padding: 2rem 0; 
    background: #f8f8f8; 

    .footer{
        .top{ 
            display: flex; 
            justify-content: space-between; 

            h2{ font-weight: 700; font-size: 1.5rem; color: #ccc; }
            button{ font-size: .9rem; color: #aaa; background: transparent; border: transparent; }
        }

        .info-more{ 
            padding: 1rem 0; 
            font-size: .9rem; 
            color: #999; 

            p{ padding: .3rem 0; text-align: right; }
        }

    }
`

export default function Footer(){
    return(
        <FooterBox>
            <div className="container">
                <div className="footer">
                    <div className="top">
                        <h2>나의 금수를 부탁해</h2>
                        <button type="button">사업자정보</button>
                    </div>
                    <div className="info-more">
                        <p><span>대표이사</span> 홍길동</p>
                        <p><span>대표전화</span> 02-000-0000</p>
                        <p>사랑시 고백구 행복동 123-45</p>
                    </div>
                </div>
            </div>
        </FooterBox>
    )
}