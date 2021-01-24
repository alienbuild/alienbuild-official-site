import Head from "next/head"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import styles from '../public/assets/styles/styles.scss';

// import App from 'next/app'

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                fontSize: '1rem',
                borderRadius: '5px',
                textTransform: 'none'
            },
        },
    },
    typography: {
        fontFamily: [
            'Alliance No1',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#ea4094',
        },
        secondary: {
            main: '#6d9ce2',
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp