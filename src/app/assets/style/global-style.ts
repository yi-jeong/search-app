import { css } from "@emotion/react"

export const GlobalStyle = css`

  @font-face {
    font-family: 'apple'; font-style: bold; font-weight: 700;
    src: url('/fonts/AppleSDGothicNeoEB.ttf') format('woff2'),
        url('/fonts/AppleSDGothicNeoEB.ttf') format('truetype');
  }

  @font-face {
    font-family: 'apple'; font-style: normal; font-weight: 500;
    src: url('/fonts/AppleSDGothicNeoR.ttf') format('woff2'),
        url('/fonts/AppleSDGothicNeoR.ttf') format('truetype');
  }

  @font-face {
    font-family: 'apple'; font-style: normal; font-weight: 300;
    src: url('/fonts/AppleSDGothicNeoT.ttf') format('woff2'), 
        url('/fonts/AppleSDGothicNeoT.ttf') format('truetype');
  }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'apple';
    font-weight: 300;
    vertical-align: baseline;
        word-break: keep-all;
    }

    a{
        text-decoration: none;
        color:#333;
    }

    /* HTML5 display-role reset for older browsers */

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
    }

    body {
    line-height: 1;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    .container{
        width: calc( 100% - 30px );
        margin: 0 auto;
        padding-left: 15px;
        padding-right: 15px;
      }
      
      @media (min-width: 767px) {
        .container{ max-width: 650px; } 
      }

`