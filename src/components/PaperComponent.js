import * as React from 'react';
import {  Paper } from '@mui/material'
export default function PaperComponent(props) {
    const { content } = props
    return (
        <>
            <Paper sx={{padding:"20px",margin:"15px"}}>
                {content}
            </Paper>
        </>
    );
}
