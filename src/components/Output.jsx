import Card from '../ui/Card';
import classes from './Output.module.css'

function Output(props){

    return(
        <div className={classes.card_frame}>
         <Card>  
            <h1>{props.renderFrame}</h1>
            <iframe id="iframe"
                srcDoc = {props.render}
                width = "650px"
                height = "500px"
                frameBorder = "0"
                sandbox = "allow-scripts"
            />
            </Card>
        </div>
    );
}
export default Output;