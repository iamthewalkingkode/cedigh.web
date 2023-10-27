const {
  FormControl,
  TextField,
  Button,
  Alert,
  Modal,
  Box,
} = MaterialUI;

const EJobs_FormOther = ({ open, onSuccess, onCancel }) => {
  const [v, setValues] = React.useState({});
  const [alert, setAlert] = React.useState({ msg: "", color: "" });

  const changeValue = (e) => {
    setValues((vv) => ({ ...v, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    // console.log(v);
  }, [v]);

  const submit = (e) => {
    e.preventDefault();
    setAlert((e) => ({ ...e, msg: "" }));
    if (v.value) {
      onSuccess(v.value);
    } else {
      setAlert((e) => ({ ...e, msg: "Please type in something" }));
    }
  };

  const close = () => {
    setValues({});
    onCancel();
  };

  return (
    <React.Fragment>
      <Modal open={open}>
        <Box style={BoxStyle}>
          {alert.msg && (
            <Alert severity={alert.color || 'error'} className="mt-4">
              {alert.msg}
            </Alert>
          )}
          <div className="divider my-6" />
          <form method="POST" action="#" onSubmit={submit} autoComplete="off">
            <div className="flex gap-4">
              <FormControl fullWidth>
                <TextField
                  type="text"
                  required
                  label="Specify other"
                  name="value"
                  value={v.value}
                  onChange={changeValue}
                />
              </FormControl>
            </div>

            <div className="divider mt-4" />

            <div className="d-flex justify-content-between">
              <Button variant="outlined" color="error" onClick={close} size="small">
                Cancel
              </Button>
              <Button type="submit" variant="contained" size="small">Save</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
