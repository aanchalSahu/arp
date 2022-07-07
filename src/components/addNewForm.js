import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Card, TextField, Fab } from '@mui/material';
import { Row, Col } from 'react-bootstrap';

export default function AddNewForm() {
    return (
        <>
            <Card>
                <Row>
                    <TextField id="outlined-basic" fullWidth label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" fullWidth label="Outlined" variant="outlined" />
                </Row>
                {/* <Row>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Row>
                <Row>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Row> */}
                <Row>
                    <Col >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Col>
                    <Col>
                        <Fab variant="extended">
                            {/* <NavigationIcon sx={{ mr: 1 }} /> */}
                            Navigate
                        </Fab>
                    </Col>
                </Row>
            </Card>
        </>
    );
}
