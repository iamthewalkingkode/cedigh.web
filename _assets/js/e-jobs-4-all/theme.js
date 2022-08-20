const { createTheme } = MaterialUI;

const EJobs_Theme = createTheme({
    palette: {
        primary: {
            main: '#ff5e14',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'large',
                disableElevation: true,
                // borderRadius: 0
            },
        },
    },
});