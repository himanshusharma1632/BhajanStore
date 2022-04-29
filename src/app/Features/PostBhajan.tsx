import { Button, Grid, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Posts } from "../models/Posts";
import axios from "axios";

export default function PostBhajan () {
const [bhajan, setBhajan] = useState<Posts[]>([]);
const [title, setTitle] = useState("");
const [item, setItem] = useState({
    title: "",
    photoUrl: "",
    likes: "",
    comment: "",
    bhajanTag: "",
    bhajanCategory: "",
    content: "",
    youtubeUrl: ""
});

function getItem(){
    fetch('http://localhost:5000/api/Post')
    .then(response => response.json())
    .then(bhajan => setBhajan(bhajan))
    .catch((error) => console.log(error))
}

useEffect(()=> {
  getItem();
}, []);

function handleInputChange(event: any) {
    setItem({...item, [event.target.name] : event.target.value});
}

function PostBhajan(){
    fetch('http://localhost:5000/api/Post', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json , text/plain , */*',
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({item})     
    })
      .then(response => response.json())
      .then(resp => console.log(resp))
      .catch((err) => console.log('Some Error Occured', err))

  }

function handleFormSubmit (event: any){
    event.preventDefault();
    PostBhajan();
}





if (!bhajan) return <Typography variant="h6" sx={{nt: 10}}> No Product in Db</Typography>

    return (
        <Fragment>
            <Typography variant ="h3" sx={{mt: 1}}>Post Bhajan</Typography>
            <List>
            {bhajan.map(bhajans => (
                <ListItem key={bhajans.id}>
                    <ListItemText>
                    {bhajans.title + '   ' + bhajans.date + '   ' + bhajans.bhajanTag}
                    </ListItemText>
                    </ListItem>
            ))}
            </List>
           
                <Stack direction ="row" component={Grid}>
                <Grid item lg={6} sx={{p: 2, m: 2}}>
              
              <form noValidate onSubmit={handleFormSubmit}>
               <TextField value ={item.title} name="title" onChange={handleInputChange}  />
               <TextField value ={item.bhajanTag} name="bhajanTag" onChange={handleInputChange}  />
               <TextField value ={item.bhajanCategory} name="bhajanCategory" onChange={handleInputChange}  />
               <TextField value ={item.likes} name="likes" onChange={handleInputChange}  />
               <TextField value ={item.photoUrl} name="photoUrl" onChange={handleInputChange}  />
               <TextField value ={item.youtubeUrl} name="youtubeUrl" onChange={handleInputChange}  />
               <TextField value ={item.comment} name="comment" onChange={handleInputChange}  />
               <TextField value ={item.content} name="content" onChange={handleInputChange}  />
                <Button type="submit" variant="contained">Post A Bhajan</Button>
                </form>
                </Grid>
                </Stack>
        </Fragment>
    )
}