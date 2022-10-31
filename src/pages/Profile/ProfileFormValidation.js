import * as Yup from 'yup';
import { Validation } from '../../constants'
import { RegExp } from '../../constants'

export const ProfileFormValidation = Yup.object({
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

})


