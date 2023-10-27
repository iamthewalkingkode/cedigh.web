$(document).ready(function () {
  const { ThemeProvider, FormControl, TextField, Select, MenuItem, InputLabel, Button, Alert, Stepper, Step, StepLabel, Box, Checkbox, FormControlLabel, FormHelperText, } = MaterialUI;

  const App = () => {
    const [v, setValues] = React.useState({ first_name: '', last_name: '', middle_name: '' });
    const [step, setStep] = React.useState(0);
    const [other, setOther] = React.useState('');
    const [error, setError] = React.useState([]);
    const [alert, setAlert] = React.useState({ msg: '', color: '' });
    const [submitting, setSubmitting] = React.useState(false);

    const changeValue = (e, multiline = false) => {
      if (e.target.value.toLowerCase() === 'other') {
        return setOther(e.target.name);
      }
      if (typeof multiline === 'boolean' && multiline) {
        let vals = v[`${e.target.name}`] || [];
        if (vals.includes(e.target.value)) {
          vals = vals.filter(v => v !== e.target.value);
        } else {
          vals.push(e.target.value);
        }
        setValues((vv) => ({ ...vv, [e.target.name]: vals, }));
      } else {
        setValues((vv) => ({ ...vv, [e.target.name]: e.target.value, }));
      }
    };

    React.useEffect(() => {
      console.log(EJobs_Form_Json.flat().filter(ff => !['intro'].includes(ff.name)).map(ff => {
        return ff.name
      }));
    }, []);

    const validate = () => {
      let form = EJobs_Form_Json[step];
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
      let data = [];
      for (var i = 0; i < Object.keys(v).length; i++) {
        let name = Object.keys(v)[i];
        let value = v[name];
        let input = EJobs_Form_Json.flat().find(ef => ef.name === name);
        data.push({ name, value, label: input.label, });
      }
      setAlert((e) => ({ ...e, msg: '' }));
      setSubmitting(true);
      axius.post('e_applicants', { data, case: 'insert', genesis: 'e_applicants', ...v, }).then((res) => {
        setSubmitting(false);
        console.log(res);
        if (res.status === 200) {
          setStep(0);
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

    const goBack = () => {
      setStep((preStep) => preStep - 1);
    };

    const goNext = () => {
      const isValid = validate();
      setError(isValid);
      if (isValid.length === 0) {
        if (step === 4) {
          submit();
        } else {
          setStep((preStep) => preStep + 1);
        }
      }
      window.scrollTo({ top: document.getElementById(`Header`)?.offsetHeight, behavior: 'smooth' });
    };

    const steps = ['Application details', 'Applicant Information', 'Info about Academic Institution', 'Info about idea', 'Thank You'];

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-12">
            {alert.msg && (
              <Alert severity={alert.color || 'error'} className="mb-4">
                {alert.msg}
              </Alert>
            )}
            <div className="divider my-6" />
            <form method="POST" action="#" onSubmit={submit} autoComplete="off">
              <Stepper activeStep={step}>
                {steps.map((label) => {
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              <div className="my-5">
                <div className="row">
                  {EJobs_Form_Json[step].map(input => {
                    return (
                      <div key={input.name} id={`input_${input.name}`} className={`col-12 col-lg-${input.col || 6} mb-4`}>
                        {input.type !== 'break' && (<InputLabel className="mb-2 no-break">{input.label}</InputLabel>)}
                        {input.type === 'break' && (<div dangerouslySetInnerHTML={{ __html: input.label }} />)}
                        <FormControl fullWidth error={error.includes(input.name)}>
                          {input.type === 'input' && (
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
                          )}
                          {input.type === 'textarea' && (
                            <TextField
                              required={input.required}
                              id={input.name}
                              error={error.includes(input.name)}
                              placeholder={input.label}
                              name={input.name}
                              value={v[input.name] || ''}
                              multiline rows={5} maxLength={2}
                              onChange={changeValue}
                              className="zws"
                              disabled={submitting}
                              helperText={error.includes(input.name) && 'This field is required'}
                            />
                          )}
                          {input.type === 'select' && (
                            <>
                              {/* <InputLabel>{input.label}</InputLabel> */}
                              <Select
                                required={input.required}
                                id={input.name}
                                name={input.name}
                                error={error.includes(input.name)}
                                value={v[input.name] || ''}
                                onChange={changeValue}
                                disabled={submitting}
                                className="zws"
                              >
                                {input.options.items.map((option) => (
                                  <MenuItem key={`${input.name}-${option}`} value={option}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Select>
                              {error.includes(input.name) && (
                                <FormHelperText>This field is required</FormHelperText>
                              )}
                            </>
                          )}
                          {input.type === 'checkbox' && (
                            <>
                              <div className="ml-4s">
                                {input.options.items.map((option) => (
                                  <div className="float-left mr-2" key={option}>
                                    <FormControlLabel control={<Checkbox value={option} name={input.name} disabled={submitting} onChange={e => changeValue(e, true)} />} label={option} />
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </FormControl>
                      </div>
                    )
                  })}

                  {step === 4 && (
                    <div className="pl-3">
                      <b className="">Notice of Collection, Use and Disclosure of Personal Information</b>
                      <p>Personal information is collected under the authority of the CEDI, Queen's University DDQIC and Leadogo, as amended, and will be used for educational, administrative and statistical purposes.</p>
                      <p>By clicking submit, you agree to your personal data being collected, used, and stored by CEDI, Queen's University DDQIC and Leadogo, for the purposes of: (i) administering, managing and developing the Entrepreneurship Jobs for All (E-Jobs4All) program (“the program”); (ii) contacting you about events, opportunities, resources and surveys/research initiatives; and (iii) developing and improving the program (includes anonymously reporting to third parties aggregated information on the impact of the program and sharing this information with the Queen's University DDQIC).</p>
                      <p>Questions regarding the collection or use of this personal information should be directed to CEDI Ghana at +233 20 520 2000</p>
                    </div>
                  )}
                </div>
              </div>

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                <Button color="inherit" variant="contained" disabled={step === 0 || submitting} onClick={goBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button variant="contained" disabled={submitting} onClick={goNext}>
                  &nbsp; &nbsp; &nbsp; {step === steps.length - 1 ? 'Submit' : 'Next'} &nbsp; &nbsp; &nbsp;
                </Button>
              </Box>
            </form>
          </div>
          <div className="col-2"></div>
        </div>

        <EJobs_FormOther
          open={other ? true : false}
          onSuccess={(e) => {
            const key = EJobs_Form_Json[step][EJobs_Form_Json[step].indexOf(EJobs_Form_Json[step].find(e => e.name === other))];
            const items = key.options.items;
            items.push(`Other: ${e}`);
            key['options']['items'] = items;
            setValues((vv) => ({ ...vv, [other]: `Other: ${e}`, }));
            setOther('');
          }}
          onCancel={() => {
            setOther('');
          }}
        />
      </React.Fragment>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById("e_jobs_4_all"));
  root.render(
    <ThemeProvider theme={EJobs_Theme}>
      <App />
    </ThemeProvider>
  );
});
