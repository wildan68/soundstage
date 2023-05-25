import { itemsList } from '../database'
import mock from '@/@mock-db'

mock.onGet('/list-items').reply(() => [200, { data: itemsList }])
