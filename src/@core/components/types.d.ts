export interface ItemsFilterBoxCard {
    id: string
    label: string
    icon?: string
}

export interface ItemsCard {
    id: string
    slug: string
    image: string
    title: string
    location: string
    date: string
    price: number
}

export type TabMenuItems = {
    key: string
    label: string
}