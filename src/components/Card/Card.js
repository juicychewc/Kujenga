import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Card.css";

function AffiliateCard(props) {
    return (
        <Card className="setHeightImage">
            <div className="center-align">
                <img 
                    className="affimg"
                    src={props.image}
                    alt={props.alt} 
                />
            </div>
            <CardContent className="positioning">
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="imageCardTitle"
                >
                    {props.name}
                </Typography>

                <Typography
                    component="p"
                    className="imageCardDescription"
                >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions className="buttonHolder">
                <Button
                    size="small"
                    color="primary"
                    href={props.affiliateURL}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    See More
                </Button>
            </CardActions>
        </Card>
    );
}

AffiliateCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default AffiliateCard;