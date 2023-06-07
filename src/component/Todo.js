import {ListItem, ListItemText, InputBase, ListItemSecondaryAction, IconButton} from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import DeleteOutlined from "@mui/icons-material/DeleteOutline";
import { useState } from "react";

const Todo = (props) => {

    const [item, modItem] = useState(props.item);
    const [readOnlyState, modOnlyState] = useState(true);


    const deleteEventHandler = () => {
        props.del(item);
    }

    const offReadOnlyMode = () => {
        modOnlyState(false);
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            modOnlyState(true);
            console.log('item', item);
            if(item.title == '') {
                alert('일정 제목을 해주시기 바랍니다.');
            }
            props.update(item);
        }
    }

    const editEventHandler = (e) => {
        const thisItem = {...item};
        thisItem.title = e.target.value;
        modItem(thisItem);
    }

    const checkBoxEventHandler = (e) => {
        const thisItem = {...item};
        thisItem.done = !thisItem.done;
        modItem(thisItem);
        props.update(thisItem);
    }

    return (
        <div className="Todo">
            <ListItem>
                <CheckBox checked={item.done} onChange={checkBoxEventHandler}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label": "naked", readOnly: readOnlyState}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        defaultValue={item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={offReadOnlyMode}
                        onKeyPress={enterKeyEventHandler}
                        onChange={editEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default Todo;