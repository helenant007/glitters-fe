import { css } from 'emotion';

// Work Experience Styles
export const companyLogoStyle = css`
    width: 100px;
`;

export const workExpWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 50px 50px 25%;
`; 

export const ExpItemWrapper = css`
    display: flex;
    flex-direction: row;
    padding: 25px;
`;

export const ExpItemCol1 = css`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
`;

export const ExpItemCol2 = css`
    ${ExpItemCol1}
    border-left: thin solid rgb(229, 231, 233);
`;

export const companyNameStyle = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: rgba(49,53,59,0.86);
    padding-bottom: 5px;
`;

export const jobTitleStyle = css`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: rgba(49,53,59,0.56);
    padding-bottom: 5px;
`;

export const jobDurationStyle = css`
    font-size: 16px;
    line-height: 26px;
    color: rgba(49,53,59,0.76);
    padding-bottom: 5px;
`;

export const jobDescStyle = css`
    font-size: 16px;
    line-height: 26px;
    color: rgba(49,53,59,0.76);
    padding-bottom: 5px;
`;


// Work Experience Inline Edit


export const styTextBox = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 300px;
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