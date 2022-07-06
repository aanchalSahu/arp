import * as React from 'react';
import { Button, Card, Container, Box } from '@mui/material'
export default function CardComponent(props) {
    const { content } = props
    return (
        <>
            <Card sx={{padding:"20px",margin:"15px"}}>
                {content}
            </Card>
        </>
    );
}
