import mock from '@/@mock-db'

import './auth'

mock.onAny().passThrough()
