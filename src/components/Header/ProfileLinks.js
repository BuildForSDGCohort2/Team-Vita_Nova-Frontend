/* eslint-disable */
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import {Link} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function ProfileLinks(props){
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    My Account
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Messages
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="#"
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    Logout
                </Button>
            </ListItem>
        </List>
    );
}
