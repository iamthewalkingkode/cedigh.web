const {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Alert,
} = MaterialUI;

const EJobs_Form = (props) => {
  const [v, setValues] = React.useState({});
  const [alert, setAlert] = React.useState({ msg: "", color: "" });
  const [submitting, setSubmitting] = React.useState(false);

  const changeValue = (e) => {
    setValues((vv) => ({ ...v, [e.target.name]: e.target.value }));
  };

  React.useEffect(() => {
    // console.log(v);
  }, [v]);

  const submit = (e) => {
    e.preventDefault();
    setAlert((e) => ({ ...e, msg: "" }));
    setSubmitting(true);
    axius
      .post("manual_underlyings_manage/api.php", { case: "create", data: v })
      .then((res) => {
        setSubmitting(false);
        console.log(res);
        if (res.status === 200) {
          setAlert({ msg: res.message, color: "success" });
        } else {
          setAlert({ msg: res.message, color: "error" });
        }
      });
  };

  const close = () => {
    setValues({});
    // handleClose();
  };

  return (
    <React.Fragment>
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
              type="number"
              required
              label="Product ISIN"
              name="isinnproduct"
              value={v.isinnproduct}
              onChange={changeValue}
              disabled={submitting}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Underlying type</InputLabel>
            <Select
              name="typeunderlying"
              required
              label="Underlying type"
              value={v.typeunderlying}
              onChange={changeValue}
              disabled={submitting}
            >
              {["SECURITY", "CASH"].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-4">
          <FormControl fullWidth>
            <TextField
              label={
                v.typeunderlying === "CASH"
                  ? "Currency code"
                  : "Underlying ISIN"
              }
              name="isinnunderlying"
              required
              value={v.isinnunderlying}
              onChange={changeValue}
              disabled={submitting}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Notional / Unit</InputLabel>
            <Select
              name="notionalunitflg"
              required
              label="Notional / Unit"
              value={v.notionalunitflg}
              onChange={changeValue}
              disabled={submitting}
              readOnly={true}
            >
              {["NOTIONAL", "UNIT"].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex gap-4">
          <FormControl fullWidth>
            <TextField
              type="number"
              required
              label="Quantity"
              name="quantity"
              value={v.quantity}
              onChange={changeValue}
              disabled={submitting}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Trading currency</InputLabel>
            <Select
              name="underlyingccy"
              required
              label="Trading currency"
              value={v.underlyingccy}
              onChange={changeValue}
              disabled={submitting}
            >
              {[
                "EUR",
                "USD",
                "JPY",
                "CHF",
                "GBP",
                "AUD",
                "HUF",
                "CAD",
                "HKD",
                "DKK",
                "NOK",
                "SEK",
                "PLN",
                "NZD",
                "KRW",
              ].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mb-6s">
          <FormControl fullWidth>
            <TextField
              label="Description"
              name="description"
              required
              multiline
              value={v.description}
              onChange={changeValue}
              disabled={submitting}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Token"
              name="token"
              required
              value={v.token}
              onChange={changeValue}
              disabled={submitting}
            />
          </FormControl>
        </div>

        <div className="divider my-6" />

        <div className="flex justify-between">
          <Button
            variant="outlined"
            color="error"
            disabled={submitting}
            onClick={close}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={submitting}>
            {submitting ? "saving..." : "Save"}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};
