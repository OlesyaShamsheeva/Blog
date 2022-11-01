import * as Yup from 'yup';
import { Validation } from '../../constants'
import { RegExp } from '../../constants'


export const ValidationSchema =
  Yup.object({
    firstName: Yup.string().trim()
      .min(2, Validation.MIN_LENGTH_2)
      .max(15, Validation.MAX_LENGTH_15)
      .matches(RegExp.REQ_VALID, Validation.ONLY_LETTERS)
      .required(Validation.REQUIRED),
    lastName: Yup.string().trim()
      .min(2, Validation.MIN_LENGTH_2)
      .max(15, Validation.MAX_LENGTH_15)
      .matches((RegExp.REQ_VALID), Validation.ONLY_LETTERS)
      .required(Validation.REQUIRED),
    emailAddress: Yup.string()
      .email(Validation.INVALID_EMAIL)
      .required(Validation.REQUIRED),
    password: Yup.string()
      .required(Validation.REQUIRED)
      .min(8, Validation.PASSWORD_MIN_LENGTH_8)
      .matches(RegExp.REQ_PASSWORD, Validation.PASSWORD_LETTERS),
  })


