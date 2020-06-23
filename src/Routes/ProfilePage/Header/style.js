import { css } from 'emotion';

// Header Styles
export const wrapperCover = css`
    position: relative;
`;

export const coverImage = css`
    width: 100%;
    object-fit: cover;
    height: 300px;
`;

export const profPic = css`
    position: absolute;
    left: calc(50% - 100px);
    width: 200px;
    height: 200px;
    border-radius: 100px;
    bottom: -100px;
`;

export const wrapperHeadline = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    border-bottom: thin solid rgb(229, 231, 233);
`;

export const h1 = css`
    font-weight: 800;
    font-size: 28px;
    line-height: 26px;
    color: rgba(49, 53, 59, 0.96);
    padding-bottom: 10px;
`;

export const h3 = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: rgba(49, 53, 59, 0.76);
    padding-bottom: 5px;
`;


// Inline Edit Styles

export const styTextBox = css`
    display: flex;
    align-items: center;
    position: relative;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(229, 231, 233);
    margin: 10px 0;
`;

export const styTextBoxItem = css`
    min-width: 0; 
    min-height: 0; 
    width: 100%; 
    color: rgba(49,53,59,0.96); 
    background-color: transparent; 
    line-height: 22px; 
    border: none; 
    outline: none; 
    height: 38px; 
    font-size: 14px; 
`;