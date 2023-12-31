import axios from "axios";
import { CurrentUser } from "./authentication.context";

export interface ISignUpSignInResponse {
  user: CurrentUser;
  status: string;
  message: string;
}

export const signUpRequest = async (
  fullname: string,
  email: string,
  password: string
): Promise<ISignUpSignInResponse> => {
  try {
    const { data } = await axios.post<ISignUpSignInResponse>(
      "http://localhost:8000/api/v1/user/signup",
      { fullname, email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return {
      user: data.user,
      status: data.status,
      message: data.message,
    };
  } catch (error: any) {
    return {
      user: {},
      status: error.status,
      message: error.message,
    };
  }
};

export const signInRequest = async (
  email: string,
  password: string
): Promise<ISignUpSignInResponse> => {
  try {
    const { data } = await axios.post<ISignUpSignInResponse>(
      "http://localhost:8000/api/v1/user/signin",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return {
      user: data.user,
      status: data.status,
      message: data.message,
    };
  } catch (error: any) {
    return {
      user: {},
      status: error.status,
      message: error.message,
    };
  }
};
