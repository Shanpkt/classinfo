import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./whatwillcover.scss"

export default function Whatwillcover() {
  return (
    <div className='acodian_box'>
        <h4>What we will cover</h4>
      <Accordion className='header'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>FRONTEND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='colapbox'>
           <p> React Hooks - useState, useEffect, useRef, UseNavigation, Usedispach, UseSelector</p>
           <p>React custom CSS, PROP Passing , SCSS </p>
           <p>Redux, ContexAPI</p>
           <p>Project deployment</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='header'>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography >BACKEND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className='colapbox'>
            <p>Rest API - POST , GET , UPDATE , DELETE</p>
            <p>MongoDB , postMan , Introduction to GraQl</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}