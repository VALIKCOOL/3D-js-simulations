import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Link to="2dviz">
              <Card chart>
                <CardHeader color="success">
                  <div className={classes.cardTitleWhite}>
                    <h3>2D</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Симуляція у двовимірному просторі</h4>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>12 симуляцій</div>
                </CardFooter>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to="3dviz">
              <Card chart>
                <CardHeader color="warning">
                  <div className={classes.cardTitleWhite}>
                    <h3>3D</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Симуляція у тривимірному просторі</h4>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>1 симуляція</div>
                </CardFooter>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
