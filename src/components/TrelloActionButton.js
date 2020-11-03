import React,{useState} from 'react'
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { addList } from '../actions/listsActions';

function TrelloActionButton({ list }) {
    
    const [formOpen, setFormOpen] = useState(false);
    const [text, setText] = useState("");

    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);

    }

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const renderAddButton = () => {
        const buttonText = list ? "Add another list" : "Add anoter card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
            onClick={openForm}
            style={{
                ...styles.openFormButtonGroup,
                opacity:buttonTextOpacity, 
                color:buttonTextColor, 
                backgroundColor:buttonTextBackground
            }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )

    }

    const renderForm = () => {

        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
        const buttonTitle = list ? "Add List" : "Add Card";
        return <div>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={closeForm}
                    value={text}
                    onChange={handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        overflow:"hidden",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button variant="contained" style={{color:"white", backgroundColor:"#5aac44"}}>
                    {buttonTitle}
                </Button>
                <Icon style={{ marginLeft:8, cursor:"pointer" }}>close</Icon>
            </div>
        </div>;
    }

    return formOpen ? renderForm() : renderAddButton()
}

const styles = {
    openFormButtonGroup: {
        display:"flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup : {
        marginTop: 8,
        display: "flex",
        alignItems: 'center'
    }
}

export default TrelloActionButton
