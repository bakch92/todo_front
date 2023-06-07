import {TextField, Paper, Button, Grid} from "@mui/material";
import { useEffect, useState } from "react";

const AddTodo = (props) => {
    
    let [itemState, modState] = useState(false);

    let [item, modItem] = useState({ 
        "title" : "",
        "done" : false
    });
    
    useEffect(() => {
        return () => {
            console.log("state 변경되었습니다");
            // window.location.reload();
        }
    }, [itemState]);

    const onButtonClick = () => {
        if(item.title == '') {
            alert("일정 제목을 입력해주시기 바랍니다.");
            return;
        }
        props.add(item);
        modState(true);
    }

    const onInputChange = (e) => {
        const thisItem = {...item};
        thisItem.title = e.target.value;
        modItem(thisItem);
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            onButtonClick();
        }
    }

    return (
        <div>
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        <TextField placeholder="Add Todo here" fullWidth 
                        onChange={onInputChange}
                        defaultValue={item.title}
                        onKeyPress={enterKeyEventHandler}/>
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined" onClick={onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default AddTodo;