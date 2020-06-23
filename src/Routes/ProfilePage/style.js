import { css } from 'emotion';

const baseButtonStyle = css`
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    margin: 10px 0;
    cursor: pointer;
    width: 80px;
`;

export const editButtonStyle = css`
    ${baseButtonStyle}
    background-color: rgb(229, 231, 233);
    color: rgba(49, 53, 59, 0.76);
`;

export const editIconStyle = css`
    display: flex;
    width: 15px;
    height: 15px;
    margin-left: 10px;
    opacity: 0.8;
`;

export const deleteButtonStyle = css`
    ${baseButtonStyle}
    background-color: #ec644b;
    color:#fff;
`;

export const saveButtonStyle = css`
    ${baseButtonStyle}
    background-color: rgb(235, 255, 239);
    color: rgb(3, 172, 14);
    border-color: rgb(79, 209, 90);
`;

export const cancelButtonStyle = css`
    ${baseButtonStyle}
    background-color: rgb(247, 247, 247);
    color: rgba(49, 53, 59, 0.76);
`;

export const addExpButtonStyle = css`
    ${saveButtonStyle}
    width: 500px;
`;