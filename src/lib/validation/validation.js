const validation = (FieldName, value) => {
  errormsg = '';

  let emailreg = `/^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/`;

  //   passreg =
  //     ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,});

  if (value != '') {
    if (FieldName == 'email') {
      if (!emailreg.test(value)) {
        errormsg = 'Must Be follow as email standard';
      }
    }
    if (FieldName == 'password') {
      if (!passreg.test(value)) {
        errormsg =
          'Password must be contain at least 1 upper ,lower, special charator and number with 8 letters';
      }
    }
  } else {
    errormsg = 'Value must be filled';
  }

  return errormsg;
};

export default validation;
