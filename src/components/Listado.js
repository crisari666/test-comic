import React,{useEffect, useState} from 'react';
import {Container, Typography, Button, Grid, Box, Paper} from '@material-ui/core';
import Api from '../helpers/Api';
import Parser from 'react-html-parser';
import {PulseLoader} from "react-spinners";
import {Link} from "react-router-dom";
const V = ()=>{
    let [list, setList] = useState([]);
    useEffect(()=>{
        getInfo();
      },[]);
      const getInfo = async ()=>{
          //
        let info = await Api('issues/',{add:{sort: 'cover_date:desc',limit: 40,}});
        console.log('INFO',info.results);
        setList(info.results);
      }
    return(
        
        <Container style={{minHeight:'100%'}}>
            <Typography align="center" variant="h1">Last Comics</Typography>
            <Box width="100%" display="flex" justifyContent="center" alignItems="center" flex={1}>
                {list.length>0&&<Grid container spacing={2} direction="row" justify="center" alignItems="center">
                    {list.map((el,index)=>{
                        return(
                            <Grid item key={index} xs={4}>
                                <Link   to={'comic/'+el.id}>
                                    <Paper style={{margin:5}}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <img className="imgList" src={el.image.medium_url} />
                                            </Grid>
                                            <Grid item xs={6} style={{maxHeight:475,overflow:'hidden',}}>
                                                <Typography variant="h6">{el.name}</Typography>
                                                <div className="resume">
                                                    {Parser(el.description)}
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Link>   
                            </Grid>
                        )
                    })}
                </Grid>}
                {list.length==0&&<Box marginY={20}><PulseLoader size={30} /></Box>}
            </Box>
            
        </Container>

    )
}
export default V;