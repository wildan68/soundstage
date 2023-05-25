import type { ItemsCard } from "@/@core/components/types"

export interface User {
    id: number
    fullname: string
    firstname: string
    lastname: string
    email: string
    password: string
    phone_number: string
    token: string
}

export interface ItemsList extends ItemsCard {}