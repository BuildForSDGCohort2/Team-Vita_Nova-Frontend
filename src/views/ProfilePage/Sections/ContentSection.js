import React from "react";

import {makeStyles} from "@material-ui/core/styles";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import FingerPrint from "@material-ui/icons/Fingerprint";

import GridContainer from  "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContentSection(){
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>What do you Wish To Do Today</h2>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Button
                            color="success"
                            size="lg"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas"/>
                            Create Send Order
                        </Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Button
                            color="success"
                            size="lg"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas"/>
                            Active Distributor
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}