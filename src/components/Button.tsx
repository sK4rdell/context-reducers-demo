import React from "react";
import styled from "styled-components";


export const Button = styled.button`
    font-family: 'Dangrek', cursive;
    border: 3px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6147C7;
    padding: 0.5rem 1rem;
    color: #FFFFFF;
    h4 {
        margin: 0;
    }
    
    &:hover {
        background: #5740B3;
        cursor: pointer; 
    }
    span {
        margin: 0 0 0 5px;
    }
`;

//
// const override = css`
//   display: block;
//   margin:  0 auto;
// `;
//
// interface Props {
//     onClick?: (event: React.MouseEvent) => any;
//     loading?: boolean;
// }
//
// export const AccentButton: React.FC<Props>
//     = ({children, loading, onClick}) => (
//     <Base
//         onClick={onClick ?? console.debug}
//     >
//         <h4>
//             {children}
//         </h4>
//         {!!loading &&
//         <PuffLoader color="#FFFFFF" loading={loading} size={18} css={override}/>
//         }
//     </Base>
// )