export enum ContactStatus {
  IDLE = "idle",
  SENDING = "sending",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
