$(document).ready(function () {
    const { ThemeProvider, FormControl, TextField, Select, MenuItem, InputLabel, Button, Alert, Stepper, Step, StepLabel, Box, Checkbox, FormControlLabel, FormHelperText, } = MaterialUI;

    const EJobs_FormPay = () => {
        const [v, setValues] = React.useState({ network: '', accountName: '', accountNumber: '' });
        const [alert, setAlert] = React.useState({ msg: '', color: '' });
        const [error, setError] = React.useState([]);
        const [submitting, setSubmitting] = React.useState(false);

        React.useEffect(() => {
            if (window.location.hostname === 'localhost') {
                setValues({
                    network: 'MTN',
                    accountName: 'Bernard Danso',
                    accountNumber: '0249567265',
                });
            }
        }, []);

        const changeValue = (e) => {
            setValues((vv) => ({ ...vv, [e.target.name]: e.target.value, }));
        };

        const validate = () => {
            let form = EJobs_Form_JsonPay;
            let valid = [];
            for (var f = 0; f <= form.length; f++) {
                let input = form[f] || {};
                if (input.required && !v[input.name]) {
                    valid.push(input.name);
                }
            }
            return valid;
        };

        const submit = () => {
            const isValid = validate();
            setError(isValid);
            if (isValid.length > 0) {
                return;
            }
            setAlert((e) => ({ ...e, msg: '' }));
            setSubmitting(true);
            axius.post('e_applicants', { case: 'pay', genesis: 'e_applicants', ...v, }).then((res) => {
                setSubmitting(false);
                console.log(res);
                if (res.status === 200) {
                    setValues({});
                    swal.success(res.message);
                    setAlert({ msg: res.message, color: 'success' });
                } else {
                    swal.error(res.message);
                    setAlert({ msg: res.message, color: 'error' });
                }
                window.scrollTo({ top: document.getElementById('Header')?.offsetHeight, behavior: 'smooth' });
            });
        };

        return (
            <React.Fragment>
                <div id="EJobs_FormPay" className="shadow">
                    <div className="text-center mb-4">Application Fee: Gh¢100</div>

                    {alert.msg && (
                        <Alert severity={alert.color || 'error'} className="mb-4">
                            {alert.msg}
                        </Alert>
                    )}

                    <div className="row">
                        {EJobs_Form_JsonPay.map(input => (
                            <div key={input.name} id={`input_${input.name}`} className={`col-12 col-lg-${input.col || 12} mb-4`}>
                                <InputLabel className="mb-2 no-break">{input.label}</InputLabel>
                                <FormControl fullWidth error={error.includes(input.name)}>
                                    {input.type === 'input' && (
                                        <>
                                            <TextField
                                                required={input.required}
                                                id={input.name}
                                                type={input.options?.type || 'text'}
                                                error={error.includes(input.name)}
                                                name={input.name}
                                                value={v[input.name] || ''}
                                                placeholder={input.label}
                                                onChange={changeValue}
                                                className="zws"
                                                disabled={submitting}
                                                helperText={error.includes(input.name) && 'This field is required'}
                                            />
                                        </>
                                    )}
                                    {input.type === 'select' && (
                                        <>
                                            <Select
                                                required={input.required}
                                                id={input.name}
                                                name={input.name}
                                                error={error.includes(input.name)}
                                                value={v[input.name] || 'no'}
                                                onChange={changeValue}
                                                disabled={submitting}
                                                className="zws"
                                            >
                                                <MenuItem value="no" disabled>
                                                    Choose an option
                                                </MenuItem>
                                                {input.options.items.map((option) => (
                                                    <MenuItem key={`${input.name}-${option.value}`} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {error.includes(input.name) && (
                                                <FormHelperText>This field is required</FormHelperText>
                                            )}
                                        </>
                                    )}
                                </FormControl>
                            </div>
                        ))}

                        <div className="col-12">
                            <Button variant="contained" disabled={submitting} onClick={submit} style={{ width: '100%' }}>
                                &nbsp; &nbsp; &nbsp; Proceed &nbsp; &nbsp; &nbsp;
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="powered">
                    <i className="fa fa-lock"></i> &nbsp;Secure Payment
                </div>
            </React.Fragment>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById("e_jobs_4_all_payment"));
    root.render(
        <ThemeProvider theme={EJobs_Theme}>
            <EJobs_FormPay />
        </ThemeProvider>
    );
});
