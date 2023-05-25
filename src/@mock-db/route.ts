import mock from '@/@mock-db'

import './auth'
import './items/list'

mock.onAny().passThrough()
