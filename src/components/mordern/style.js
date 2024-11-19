import styled from 'styled-components'

export const WholeBg = styled.div`
    width: 100vw;
    height: 100vh;
    background:  ${(props) => props.theme.bg};
`

export const MordernListComponents = styled.div`
    box-shadow: 5px 10px 10px 0px rgba(0,0,0,0.3);
    background: ${(props) => props.theme.contentBg};
    backdrop-filter: blur(3px);
    padding: 30px 20px;
    position: absolute;
    top : 50% ;
    right: 50%;
    transform: translate(50%, -50%);
    border-radius: 16px;
    line-height: 180%;
    width: 80%;
    .header-wrap{
        display: flex;
        justify-content: space-between;
        div.time-wrap{
            display: flex;
            gap: 8px;
            align-items: baseline;
            h1{
                font-size: 60px;
                font-weight: bold;
                margin-top: 18px;
                color: ${(props) => props.theme.textColor};
                text-align: center;
                margin-bottom: 8px;
            }
            p.calender{
                font-size: 14px;
                font-weight: 500;
                margin-top: 4px;
                color: ${(props) => props.theme.subTextColor};
                text-align: center;
            }
        }
    }
    .notelist{
        margin-top:19px; 
        gap:8px; 
        display:flex; 
        flex-direction:column;
        max-height: 350px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .blueBtn{
        float: right;
        margin-top: 32px;
        background-color: #296BF6;
        color: white;
        font-size: 14px;
    }
    ::-webkit-scrollbar{
        width: 5px;
        padding-left : 5px;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: #888;
    }
    ::-webkit-scrollbar-thumb { 
        background-color: #333;
    }
`
export const MordernListHeaderCompoenet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        gap: 8px;
    }
    ul li.circle{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        &.red{
            background-color: red ;
        }
        &.yellow{
            background-color: orange ;
        }
        &.green{
            background-color: green ;
        }
    }
    button{
        background-color: ${(props) => props.theme.buttonBg};
        color : ${(props) => props.theme.buttonColor};
        font-size: 18px;
    }
`   
export const SearchBarComponents = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 16px;
    height: 35px;
    input{
        background-color: ${(props) => props.theme.inputBg};
        border: none;
        padding: 5px 13px;
        border-radius: 4px;
        width: 200px;
        flex-shrink: 0;
        &:focus-visible{
            border: none;
        }
    }
    select{
        background-color: ${(props) => props.theme.inputBg};
        border: none;
        border-radius: 4px;
        color:  ${(props) => props.theme.textColor};
        padding: 5px 10px;
        font-size: 14px;
        width: 100%;
    }
`
export const MordernItemComponents = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: ${(props) => props.theme.contentBg};
    border-radius: 8px;
    padding: 23px 30px;
    width: 100%;
    cursor: pointer;
    line-height: 150%;
    box-sizing: border-box;
    .title-wrap{
        display: flex;
        gap: 4px;
        strong{
            font-size: 18px;
            font-weight: 700;
            color: ${(props) => props.theme.textColor};
        }
        h3{
            font-size: 22px;
            font-weight: bold;
            color: ${(props) => props.theme.textColor};
        }
    }
    p{
        font-size: 14px;
        color: #333;
        color: ${(props) => props.theme.subTextColor};
    }
`
