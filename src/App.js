import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import MyAccordion from './MyAccordion'
import DemoController from './DemoController'
import ThemeProvider from './ThemeProvider'

const data = {
  Grain: ['Maize', 'Rye', 'Sorghum'],
  Herb: ['Cilantro', 'Mint', 'Thyme'],
  Sauce: ['Cho-lula', 'Franks Red Hot', 'Tabasco'],
}

const useStyles = makeStyles(theme => ({
  container: {
  },
  root: {
    flex: 1,
  },
}))

const bonsaiRedux = {
  initialState: {
    spacing: 2
  },
  reducer: (state, action) => {
    if (action.type === 'SET_SPACING') {
      const spacing = action.payload.spacing

      return {...state, spacing}
    }

    return state
  }
}

const App = () => {
  const classes = useStyles()

  const [state, dispatch] = React.useReducer(bonsaiRedux.reducer, bonsaiRedux.initialState)

  const spacing = state.spacing

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider>
        <Container className={classes.container} maxWidth="sm">
          <DemoController dispatch={dispatch} state={state} />
          <MyAccordion data={data} spacing={spacing} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
