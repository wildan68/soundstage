import { Sheet as VBottomSheet, createBottomSheet } from 'bottom-sheet-vue3'
import { usePlugins } from '@/@core/app'

import 'bottom-sheet-vue3/style.css'

import './style.scss'

export default [createBottomSheet(), usePlugins({ VBottomSheet })]
