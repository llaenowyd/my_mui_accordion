import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
})

const ThemeProvider = ({children}) => (<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>)

export default ThemeProvider
