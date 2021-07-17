import classes from './Editor.module.css';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai'
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/javascript';

function Editor(props){   
    return(
        <div className = {classes.control}>
                <label htmlFor="description">{props.text}</label>
                <AceEditor
                height = '500px'
                width = '600px'
                theme = 'monokai'
                fontSize = '12pt'
                value = {props.initialData}
                onChange={props.setData}
                mode={props.language}
                editorProps={{ $blockScrolling: true }}>
                </AceEditor>
            </div>
        );
}

export default Editor;