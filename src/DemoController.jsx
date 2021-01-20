import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Card from '@material-ui/core/Card'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  box: {
    margin: spacing => theme.spacing(spacing),
    padding: spacing => theme.spacing(spacing),
  },
  spacingLabel: {
    marginRight: '1em',
  },
}))

const DemoController = ({dispatch, state}) => {
  const spacing = state.spacing

  const classes = useStyles(spacing)

  const selectSpacing = ev => {
    const spacing = ev.target.value

    dispatch({
      type: 'SET_SPACING',
      payload: {
        spacing
      }
    })
  }

  return (
    <Card className={classes.box}>
      <span className={classes.spacingLabel}>spacing:</span>
      <Select className={classes.box} defaultValue={spacing} onChange={selectSpacing}>
        { [0,1,2,4,8].map(
            s => (<option key={s} value={s}>{s}</option>)
          )
        }
      </Select>
    </Card>
  )
}

export default DemoController
