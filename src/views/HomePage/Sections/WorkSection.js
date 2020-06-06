import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

import PostRoute from './PostRoute.jsx'
import GetRoute from './GetRoute.jsx'

import styles from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.js'

const useStyles = makeStyles(styles)

export default function WorkSection() {
	const classes = useStyles()
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem cs={12} sm={12} md={8}>
					<h2 className={classes.title}>Examples of API Routes</h2>
					<h4 className={classes.description}>
            Putting all the pieces together is no doubt the hardest part of getting apps off the ground. Checkout the examples below to see how forms can be built using React with hooks that can submit new data to the API, consume data from the API, and manage state dynamically in the frontend. 
					</h4>
				</GridItem>
				<GridItem cs={12} sm={12} md={5}>
					<PostRoute />
				</GridItem>
				<GridItem cs={12} sm={12} md={5}>
					<GetRoute />
				</GridItem>
			</GridContainer>
		</div>
	)
}
