export interface Auth {
    email: string
    password: string
}

export interface Register extends Auth {
    firstname: string
    lastname: string
    phone_number: string
}