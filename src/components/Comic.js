import React,{useEffect, useState} from 'react';
import {Container, Typography, Button, Grid, Box, Paper, Link} from '@material-ui/core';
import {PulseLoader} from "react-spinners";
import Parser from 'react-html-parser'
import Api from '../helpers/Api';
const V = (props)=>{
    let [info, setInfo] = useState(false);
    useEffect(()=>{
        loadComic()
    },[]);
    const loadComic =async()=>{
        let info = await Api('issues/',{add:{sort: 'cover_date:desc',limit: 40,filter:'id:'+props.match.params.id}});
        console.log('INFO',info.results);
        setInfo(info.results[0]);
    }

    return(
        <Container style={{minHeight:'100%'}}>
            <Typography align="center" variant="h1">Single Comic</Typography>
            {info&&<Grid container spacing={4}>
                <Grid item xs={6}>
                    {<img src={info.image.super_url} className="imgList" />}
                    
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">{info.name}</Typography>
                    {Parser(info.description)}
                    <Typography variant="overline">Date added: {info.date_added}</Typography> <br/>
                    <Link href={info.site_detail_url} target="__blank" >View More...</Link>
                    {/* {JSON.stringify(info)} */}
                </Grid>
            </Grid>}
            <Box width="100%" display="flex" justifyContent="center" alignItems="center" flex={1}>
                {!info&&<Box marginY={20}><PulseLoader size={30} /></Box>}
            </Box>
            
        </Container>
    )
}
export default V;