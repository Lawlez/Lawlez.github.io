
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
// react components for routing our app without refresh
import { Link, useLocation } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import {
	FlightLand,
	Face,
	Fingerprint,
	Home
} from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js'
import Button from 'components/CustomButtons/Button.js'
import { successColor } from 'assets/jss/material-kit-react.js'

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
	const classes = useStyles()
	let { pathname } = useLocation()
	return (
		<List className={classes.list}>
			{pathname !== '/' ?
				<ListItem className={classes.listItem}>
					<Link to="/" className={classes.nav}>
						<Button
							color="transparent"
							className={classes.navLink}
						>
							<span style={{ color: successColor }}>
								<Home />
                Home
							</span>
						</Button>
					</Link>
				</ListItem>
				: null}
			<ListItem className={classes.listItem}>
				<Link to="/landing" className={classes.nav}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
						<FlightLand />
            Landing
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/login" className={classes.nav}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
						<Fingerprint />
            Login
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/profile" className={classes.nav}>
					<Button
						color="transparent"
						className={classes.navLink}
					>
						<Face />
            Profile
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="github"
					title="View GitHub"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://github.com/lawlez"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + ' fab fa-github'} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	)
}
