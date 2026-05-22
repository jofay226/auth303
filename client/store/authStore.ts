import { create } from 'zustand'

type AuthStoreType = {
    accessToken: string,
    actions: {
       saveToken: (token: string) => void 
    }
}


export const useAuthStore = create<AuthStoreType>((set) => ({
  accessToken: "",
  actions: {
    saveToken: (token) => set(() => ({ accessToken: token })),
  }
}))