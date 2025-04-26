import { userAuth } from "./base.url";

const userLogin = {
  post: async (endpoint: string, data: any) => {
    try {
      const response = await userAuth.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userLogin;
