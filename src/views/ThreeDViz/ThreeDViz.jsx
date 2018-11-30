import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Iframe from "react-iframe";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

class ThreeDViz extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  constructor(props) {
    super(props);

    this.state = {
      demos: [
        {
          head: "Симуляція рідин",
          url: "https://nifty-williams-6676b1.netlify.com/",
          width: "100%",
          height: "850px",
          id: "fluid-water",
          name: "fluid-water",
          started: false
        },
        {
          head: "Симуляція фізичних сил",
          url: "/demos/myPhysicsLab Simple Pendulum.html",
          width: "100%",
          height: "650px",
          id: "physics-powers",
          name: "physics-powers",
          started: false
        }
      ]
    };

    this.startHanlder = this.startHanlder.bind(this);
  }

  startHanlder(index) {
    const currentDemo = {
      ...this.state.demos[index]
    };

    currentDemo.started = !currentDemo.started;

    this.setState({
      demos: this.state.demos.map((d, i) => {
        if (i === index) {
          return currentDemo;
        }
        return d;
      })
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          {this.state.demos.map((d, i) => (
            <React.Fragment key={d.url}>
              <GridItem xs={12} sm={12} md={12}>
                <Card chart>
                  <CardHeader color="success">
                    <div className={classes.cardTitleWhite}>
                      <h3>{d.head}</h3>
                    </div>
                  </CardHeader>
                  <CardFooter chart>
                    <div className={classes.stats} />
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <div className={classes.startWrap}>
                    <Button onClick={() => this.startHanlder(i)}>
                      {!d.started ? "Старт" : "Стоп"}
                    </Button>
                  </div>
                  {d.started && (
                    <Iframe
                      url={d.started ? d.url : ""}
                      width={d.width}
                      height={d.height}
                      name={d.name}
                      id={d.id}
                      className="myClassname"
                      display="initial"
                      position="relative"
                      allowFullScreen={true}
                      onLoad={d.changeStyleFunc}
                    />
                  )}
                </Card>
              </GridItem>
            </React.Fragment>
          ))}
        </GridContainer>
      </div>
    );
  }
}

ThreeDViz.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(ThreeDViz);
