
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import ThumbUp from "@material-ui/icons/ThumbUp";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.js";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://4Stellungskraft.ch/"
                className={classes.block}
              >
                4Stellungskraft
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/lawlez"
                className={classes.block}
              >
                <i className="fab fa-github-square"></i>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/dominik-feger/"
                className={classes.block}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </ListItem>
          </List>
        </div>
        <div id="thanks" className={classes.right}>
          Thanks for stopping by
          <ThumbUp id="thumbup" style={{ paddingLeft: '4px' }}/>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
