import styled from 'styled-components'

export const EditCompoenet = styled.div`
    .prevBtn{
        margin-top: 16px;
        color: white;
        background-color: orange;
        padding: 5px 15px;
        font-size: 16px;
    }
    h3{
        color: ${(props) => props.theme.textColor} ;
    }
    .content-wrap{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        input{
            padding: 15px 15px;
            border-radius: 6px;
            font-size: 20px;
            border: none;
            font-weight: 500;
            background-color: ${(props) => props.theme.contentBg} ;
            color : ${(props) => props.theme.textColor} 
        }
        textarea{
            border: none;
            padding: 20px 15px;
            border-radius: 6px;
            margin-top: 4px;
            height: 150px;
            background-color: ${(props) => props.theme.contentBg} ;
            color : ${(props) => props.theme.textColor} 
        }
    }
    .button-wrap{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .deleteBtn{
            color: white;
            background-color: #dd3535;
            padding: 5px 15px;
            font-size: 16px;
        }
        .saveBtn{
            color: white;
            background-color: #296BF6;
            padding: 5px 15px;
            font-size: 16px;
        }
    }
`