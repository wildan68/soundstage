import type { Component } from 'vue'

export interface ProfileMenu {
    key: string
    label: string
    icon: string
    component?: Component
    to?: string
    separator?: boolean
}