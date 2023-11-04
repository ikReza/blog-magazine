import toast from "react-hot-toast";
const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MobileRegex = /^(\+88)?01[3-9][0-9]{8}$/;

class FormHelper {
  IsEmpty(val) {
    return val.length === 0;
  }

  IsMobile(val) {
    return MobileRegex.test(val);
  }

  IsEmail(val) {
    return EmailRegex.test(val);
  }

  ErrorToast(msg) {
    toast.error(msg);
  }

  SuccessToast(msg) {
    toast.success(msg);
  }
}

export const { IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast } =
  new FormHelper();
