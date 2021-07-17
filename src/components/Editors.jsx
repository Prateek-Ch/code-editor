import React, { useState} from 'react';
import Output from './Output';
import Editor from './Editor';

import classes from './Editors.module.css'
import { Route, Switch } from 'react-router-dom';

function Editors(props){
    const [html,setHtml] = useState('');
    const [css,setCss] = useState('');
    const [js,setJs] = useState('');
    const renderFrame = `<html><body>${html}</body><style>${css}</style><script>${js}</script></html>` ;
    
    function sendPaste(){
        var request = new XMLHttpRequest();
        request.open('POST', "https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php");
        request.setRequestHeader("XMLHttpRequest","X-Requested-With");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(`api_dev_key=YOUR_API_DEV_KEY&api_option=paste&api_paste_private=0&api_paste_name=index.html&api_paste_expire_date=1M&api_paste_format=html5&api_paste_code=${html}`);
        request.send(`api_dev_key=YOUR_API_DEV_KEY&api_option=paste&api_paste_private=0&api_paste_name=index.html&api_paste_expire_date=1M&api_paste_format=css&api_paste_code=${css}`);
        request.send(`api_dev_key=YOUR_API_DEV_KEY&api_option=paste&api_paste_private=0&api_paste_name=index.html&api_paste_expire_date=1M&api_paste_format=javascript&api_paste_code=${js}`);
    }

    return(
        <div className = {classes.editors_layout}>
        <h3>Happy Coding!</h3>
        <button className="btn btn-dark" onClick={sendPaste()}>Paste your Code</button>
        <div className={classes.rowC}>
            <Switch>
            <Route path='/' exact>
            <Editor text = "index.html" initialData = {html} setData = {setHtml} language="html"/>
            </Route>

            <Route path='/css'>
            <Editor text = "styles.css" initialData = {css} setData = {setCss} language="css"/>
            </Route>

            <Route path='/js'>
            <Editor text = "index.js" initialData = {js} setData = {setJs} language="javascript"/>
            </Route>
            </Switch>
            <Output render = {renderFrame}/>
        </div>
        </div>
    );
}

export default Editors;