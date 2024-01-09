const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json()) // para que pueda soportar la request cuando se le pasa un objeto para parsearlo
app.use(cors())
let users = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Madame',
        first: 'Colette',
        last: 'Guerin'
      },
      location: {
        street: {
          number: 2107,
          name: 'Rue Pierre-Delore'
        },
        city: 'Lovatens',
        state: 'Valais',
        country: 'Switzerland',
        postcode: 3682,
        coordinates: {
          latitude: '-60.8133',
          longitude: '106.0280'
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska'
        }
      },
      email: 'colette.guerin@example.com',
      login: {
        uuid: '36213f8d-ab68-4906-b215-5660c84ffbf2',
        username: 'greengoose482',
        password: 'alpha',
        salt: 'SAFLaz7k',
        md5: 'b57e0f84c9478c7ef210e8f7db8c85f8',
        sha1: 'bb5b59f1cba596d9724a385eb119fa204807a449',
        sha256: '3a13f4babce0389d1f68537fb5c48a436c3e6ff3f64e7a043ac395d00dba0283'
      },
      dob: {
        date: '1966-06-22T04:14:37.947Z',
        age: 57
      },
      registered: {
        date: '2002-05-24T22:33:07.494Z',
        age: 21
      },
      phone: '079 979 18 47',
      cell: '075 469 01 98',
      id: {
        name: 'AVS',
        value: '756.6654.7507.57'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/73.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/73.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/73.jpg'
      },
      nat: 'CH'
    },
    {
      gender: 'female',
      name: {
        title: 'Miss',
        first: 'Roxane',
        last: 'Guerin'
      },
      location: {
        street: {
          number: 6328,
          name: 'Rue des Abbesses'
        },
        city: 'Pau',
        state: 'Mayenne',
        country: 'France',
        postcode: 44868,
        coordinates: {
          latitude: '68.1649',
          longitude: '-14.0648'
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland'
        }
      },
      email: 'roxane.guerin@example.com',
      login: {
        uuid: 'b16bf03e-daa8-46b9-8c8c-6fe605abaa63',
        username: 'greenbutterfly826',
        password: 'photo',
        salt: 'oRD6JTGC',
        md5: '481e1fb64a299f2e9002b3bf6aed90a2',
        sha1: '19f7d73a5d3ea4ff5ffe4c18cd64f6b0473f578a',
        sha256: '7d31e08198ef4786f91c9f28d51119a2b11a977b5fb265640d7197af26ddc2a8'
      },
      dob: {
        date: '1992-02-09T17:15:07.308Z',
        age: 31
      },
      registered: {
        date: '2018-07-19T02:33:18.906Z',
        age: 5
      },
      phone: '03-89-53-11-25',
      cell: '06-42-51-32-94',
      id: {
        name: 'INSEE',
        value: '2920147370660 33'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/42.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/42.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/42.jpg'
      },
      nat: 'FR'
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Naja',
        last: 'Nielsen'
      },
      location: {
        street: {
          number: 5644,
          name: 'Langebjergvej'
        },
        city: 'Vesterborg',
        state: 'Hovedstaden',
        country: 'Denmark',
        postcode: 64866,
        coordinates: {
          latitude: '36.8329',
          longitude: '-6.4741'
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland'
        }
      },
      email: 'naja.nielsen@example.com',
      login: {
        uuid: 'e9b87b61-cdc7-46de-8622-39648254f76c',
        username: 'purplesnake739',
        password: '0.0.0.000',
        salt: 'z9nCabJW',
        md5: '980c01056f6425fe9d583c2f9c2606a0',
        sha1: '7fcf213f6e755435c20f842e6a0864773594ed6d',
        sha256: 'da93562dd246157b7f3235001e993e306fee24ea130e5b860d3e5067909c36e1'
      },
      dob: {
        date: '1964-02-22T13:27:55.502Z',
        age: 59
      },
      registered: {
        date: '2005-02-07T00:34:16.432Z',
        age: 18
      },
      phone: '15994889',
      cell: '04262169',
      id: {
        name: 'CPR',
        value: '220264-9825'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/78.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg'
      },
      nat: 'DK'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Travis',
        last: 'Duncan'
      },
      location: {
        street: {
          number: 4413,
          name: 'Westmoreland Street'
        },
        city: 'New Ross',
        state: 'Kerry',
        country: 'Ireland',
        postcode: 60329,
        coordinates: {
          latitude: '-19.8184',
          longitude: '92.5271'
        },
        timezone: {
          offset: '+2:00',
          description: 'Kaliningrad, South Africa'
        }
      },
      email: 'travis.duncan@example.com',
      login: {
        uuid: '1aa139b9-e597-4e39-af37-009c0adb52c3',
        username: 'silvertiger170',
        password: 'freckles',
        salt: 'b0SolnH8',
        md5: 'a10a26239732122dc93c35132251af3a',
        sha1: 'dee042b9c585cd2c1ed1af0e2e174f899c58fce7',
        sha256: 'e642cbbcfa79ecf3c71bb076f16bd19f3d4bed9341c2da8450fec068b871cb45'
      },
      dob: {
        date: '1949-04-10T12:55:53.725Z',
        age: 74
      },
      registered: {
        date: '2007-01-02T05:52:05.040Z',
        age: 17
      },
      phone: '061-448-8023',
      cell: '081-600-2424',
      id: {
        name: 'PPS',
        value: '9525301T'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/13.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg'
      },
      nat: 'IE'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Jacob',
        last: 'Broekhuijsen'
      },
      location: {
        street: {
          number: 2224,
          name: 'De Cortestraat'
        },
        city: 'Beek gem Montferland',
        state: 'Noord-Holland',
        country: 'Netherlands',
        postcode: '1759 IY',
        coordinates: {
          latitude: '17.3565',
          longitude: '171.6425'
        },
        timezone: {
          offset: '+9:30',
          description: 'Adelaide, Darwin'
        }
      },
      email: 'jacob.broekhuijsen@example.com',
      login: {
        uuid: 'e7ddf064-a32a-4ffd-b970-f387fb680fb3',
        username: 'redcat181',
        password: 'hoffman',
        salt: '14tiluYa',
        md5: '6297d3b3f6fada48286246246d6c24a4',
        sha1: 'bbe528bf266e42a3e6352bc90cebec70d66bf626',
        sha256: '9e99ae77961d9c7933c6ef5b676b98e71b343de7ed52f43e30d39c1a3c0af0e1'
      },
      dob: {
        date: '1973-04-30T17:24:08.554Z',
        age: 50
      },
      registered: {
        date: '2002-10-07T19:31:21.099Z',
        age: 21
      },
      phone: '(0986) 355661',
      cell: '(06) 47310524',
      id: {
        name: 'BSN',
        value: '13230745'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/33.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg'
      },
      nat: 'NL'
    }
  ],
  info: {
    seed: 'foobar',
    results: 5,
    page: 2,
    version: '1.4'
  }
}
const logger = require('./loggerMiddleware')
app.use(logger)

app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo</h1>')
})
app.get('/api/users', (request, response) => {
  response.json(users)
})
app.get('/api/users/:id', (request, response) => {
  const id = request.params.id
  const user = users.results.find((user) => user.login.uuid === id)
  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }
})
app.delete('/api/users/:id', (request, response) => {
  const id = request.params.id
  console.log(id)
  users = users.results.filter((user) => user.login.uuid !== id)
  response.status(204).end()
})
app.post('/api/users', (request, response) => {
  const user = request.body
  if (!user) {
    return response.status(400).json({
      error: 'Error al insertar el usuario'
    })
  }
  const results = users.results
  users.results = [...results, user]
  response.status(201).json(user)
})
app.use((request, response) => {
  response.status(404).json({
    error: 'Not found'
  })
})
const port = 3001
app.listen(port, () => {
  console.log(`Server corriendo por el puerto ${port}`)
})
// El inicio del servidor en express es asincrono
