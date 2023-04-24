export interface NavMenu {
    key: string
    label: string
    to?: string | void
}

export interface Footer extends NavMenu {
    children: NavMenu[]
}