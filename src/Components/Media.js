import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, makeStyles, Paper, Button} from "@mui/material";
import {useEffect, useState} from "react";

export default function Media() {
    const paperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
    const [name, setName]=useState('')
    const [id, setId]=useState('')
    const [media,setMedia]=useState([])

    const  handleClick=(event)=>{
        event.preventDefault()
        const media ={name,id}
        console.log(media)
        fetch("http://localhost:8080/get_media", {method:"get", mode:"no-cors"}


            .then(()=>{console.log("Media added")}))
    }

useEffect(()=>{
    fetch("http://localhost:8080/get_media")
        .then(res=>res.json())
        .then((result)=>{
        setMedia(result);
    }
)
},[])


    return (

        <Container>
            <Paper  elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Adding something</u></h1>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate
            autoComplete="off"
        >

            <TextField id="standard-basic" label="Media Name" variant="standard" fullWidth value={name} onChange={event => setName(event.target.value)}/>
            <TextField id="standard-basic" label="Media Id" variant="standard" fullWidth value={id} onChange={event => setId(event.target.value)}/>
            <Button variant="contained" color ="secondary" onClick={handleClick}>Submit</Button>
        </Box>

        </Paper>
            <h1>Media</h1>
            <Paper elevation={3} style={paperStyle}></Paper>
            {media.map(media=>(
                <Paper elevation={6} style={{margin: "10px", padding:"15px", textAlign:"left"}} key={media.id}>
                    Id:{media.id}
                    Name:{media.name}
                </Paper>
            ))}
        </Container>
    );
}
