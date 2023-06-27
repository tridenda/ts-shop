import axios from "axios";
import { CurrentUser } from "./authentication.context";

interface ISignUpRequest {
  user: CurrentUser;
  status: string;
  message: string;
}

export const signUpRequest = async (
  fullname: string,
  email: string,
  password: string
): Promise<ISignUpRequest> => {
  try {
    const { data } = await axios.post<ISignUpRequest>(
      "http://localhost:8000/api/v1/user/signup",
      { fullname, email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

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
