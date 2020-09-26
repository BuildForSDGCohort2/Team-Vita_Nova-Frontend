import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Solution</h2>
          <h5 className={classes.description}>
            An online platform that seeks to alleviate the problem of
            distribution channel between farmers and consumers of farm 
            produce by leveraging on a network of users traveling 
            to various destinations of interest.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title=""
              description="Users are able to become Senders of goods from their location to the desired destination for a lesser fee by leveraging on the network of available distributors."
              icon={Chat}
              iconColor="info"
              vertical
            />
            <Button
              color="success"
              size="lg"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas" />
              Become A Sender
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title=""
              description="We provide users the opportunity to become Distributors where they earn by traveling and delivering farm produce and other goods to their travel destinations on request."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
            <Button
              color="success"
              size="lg"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas" />
              Become A Distributor
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
