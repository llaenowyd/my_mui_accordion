import React from 'react'
import cx from 'classnames'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'

const useStyles = makeStyles(theme => ({
  box: {
    margin: spacing => theme.spacing(spacing/2),
    padding: spacing => theme.spacing(spacing/2),
  },
  item: {
  },
  myAccordion: {
  },
  segmentChildren: {
  },
  segmentHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  segmentHeadingIconButton: {
    marginLeft: 'auto',
    maxHeight: spacing => theme.spacing(spacing), // tbd derive from lineHeight of text in segmentHeading
    maxWidth: spacing => theme.spacing(spacing),
  },
}))

const Item = ({spacing, text}) => {
  const classes = useStyles(spacing)

  return (<div className={classes.item}>{text}</div>)
}

const SegmentHeading = ({open, spacing, text, toggleOpen}) => {
  const classes = useStyles(spacing)

  const Icon = open ? ExpandLessRoundedIcon : ExpandMoreRoundedIcon

  return (
    <Card className={cx(classes.box, classes.segmentHeading)}>
      <Typography>{text}</Typography>
      <IconButton className={classes.segmentHeadingIconButton} onClick={toggleOpen}>
        <Icon />
      </IconButton>
    </Card>
  )
}

const Segment = ({children, spacing, text}) => {
  const classes = useStyles(spacing)

  const [open, setOpen] = React.useState(true)
  const toggleOpen = () => setOpen(!open)

  return (
    <Card className={classes.box}>
      <SegmentHeading open={open} spacing={spacing} text={text} toggleOpen={toggleOpen} />
      <div className={classes.segmentChildren}>
        <Collapse in={open}>
          {children}
        </Collapse>
      </div>
    </Card>
  )
}

const MyAccordion = ({data, spacing}) => {
  const classes = useStyles(spacing)

  return (
    <Card className={classes.box}>
      {Object.entries(data).map(
        ([category, members]) => (
          <Segment key={category} spacing={spacing} text={category}>
            {
              members.map(member => (<Item key={member} spacing={spacing} text={member} />))
            }
          </Segment>
        )
      )}
    </Card>
  )
}

export default MyAccordion
