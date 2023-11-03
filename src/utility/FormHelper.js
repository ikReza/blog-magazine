import toast from "react-hot-toast";
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MobileRegex = /^(\+88)?01[3-9][0-9]{8}$/;

class FormHelper {
  isEmpty(val) {
    return val.length === 0;
  }

  isMobile(val) {
    return MobileRegex.test(val);
  }

  isEmail(val) {
    return EmailRegex.test(val);
  }

  errorToast(msg) {
    toast.error(msg);
  }

  successToast(msg) {
    toast.success(msg);
  }
}

export const { isEmpty, isMobile, isEmail, errorToast, successToast } = new FormHelper();
