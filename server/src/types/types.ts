export type UserRegisterInput = {
    name: string ,
    email: string,
    password: string
}

export type LoginInput = Omit<UserRegisterInput, "name">