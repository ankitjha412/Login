import axios from "axios";

const API_URL ="http://localhost:5000/api/users";

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const registerUser = async (data: RegisterPayload) => {
  return axios.post(`${API_URL}/register`, data);
};

export const loginUser = async (data: LoginPayload) => {
  return axios.post<AuthResponse>(`${API_URL}/login`, data);
};

export const getProfile = async (token: string) => {
  return axios.get<User>(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateProfile = async (token: string, data: Partial<RegisterPayload>) => {
  return axios.put(`${API_URL}/profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteUser = async (token: string) => {
  return axios.delete(`${API_URL}/delete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
