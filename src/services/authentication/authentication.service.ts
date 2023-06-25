export const signUpRequest = async (
  fullname: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    console.log(fullname, email, password);
  } catch (error) {
    throw new Error("Failed to sign up");
  }
};
