import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Carousel from 'react-multi-carousel';
import { Button, Card, Container, Box } from '@mui/material'
export default function Animation1() {

    return (
        <>
            {/* <div id="trial"> </div>
            <div id="trial1"></div>
            <div id="trial2"></div>
            <div class="blob"></div> */}

            <div class="container">
                <div class="card">
                    <h1 class="title">Designed For Work</h1>
                    <p class="subtitle">Introducing the first ever 5G enabled tablet. You've got a tablet that
                        let's you play harder and work smarter.</p>
                    <button class="btn">Get Started</button>
                </div>
                <div class="blob"></div>
            </div>


            <div class="bulb-holder">
                <div class="bulb">
                    <div class="light"></div>
                </div>
            </div>
            <div class="bulb-holder" id="b1">
                <div class="bulb">
                    <div class="light"></div>
                </div>
            </div>
            <div class="bulb-holder" id="b2">
                <div class="bulb">
                    <div class="light"></div>
                </div>
            </div>
            <div class="front">
                <div id="love"><h1>Jalin Satru</h1></div>
            </div>

            {/* <div class="furniture">
                <div class="table_legs">
                    <div class="table"></div>
                    <div class="table_end"></div>
                </div>
                <div class="chair">
                    <div class="back"></div>
                    <div class="legs"></div>
                </div>
                <div class="chair" id="chair1">
                    <div class="back"></div>
                    <div class="legs"></div>
                </div>
            </div> */}




        </>
    );
}
