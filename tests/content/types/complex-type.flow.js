// @flow

declare type ComplexType = {
  distance: number & Float32;
  precise_start: number & Float64;
  precise_end: number & Float64;

  email: EmailType;
  email_string: string & EmailType;

  phone: TelephoneType;
  phone_number: number & TelephoneType;
}
