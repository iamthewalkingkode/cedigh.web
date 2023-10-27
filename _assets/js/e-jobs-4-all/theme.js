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

const BoxStyle = {
    p: 2,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 4,
    backgroundColor: '#fff',
    boxShadow: 32,
    padding: 30,
    maxHeight: '90vh',
    overflowY: 'scroll',
};