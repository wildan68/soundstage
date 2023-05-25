import type { ItemsList, User } from './types'

export const users: User[] = [
  {
    id: 1,
    fullname: 'Demo User',
    firstname: 'Demo',
    lastname: 'User',
    email: 'demo@example.com',
    password: 'demo123',
    phone_number: '+628126352736',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZXhhbXBsZS5jb20iLCJuYW1lIjoiRGVtbyBVc2VyIn0.4ATAfFDiir-DNhUaW-inZnnQpj5smFZXGgLpuqv0JNo',
  },
]

export const itemsList: ItemsList[] = [{
  id: '1',
  title: 'The Best of Jazz',
  slug: 'the-best-of-jazz',
  image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14',
  price: 10,
  location: 'Jakarta',
  date: '2023-12-12',
}, {
  id: '2',
  title: 'Epic Music Festival',
  slug: 'epic-music-festival',
  image: 'https://images.unsplash.com/photo-1563841930606-67e2bce48b78',
  price: 30,
  location: 'Bandung',
  date: '2023-13-12',
}, {
  id: '3',
  title: 'Salsa Night',
  slug: 'salsa-night',
  image: 'https://images.unsplash.com/photo-1567942712661-82b9b407abbf',
  price: 20,
  location: 'Semarang',
  date: '2023-13-12',
}, {
  id: '4',
  title: 'World Music Festival sahjdvhjasdv asbdbasd kasdkbaskjdbkj asdkjbsakjdbkj asdjbaskjdb',
  slug: 'world-music-festival',
  image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
  price: 62,
  location: 'Jakarta',
  date: '2023-13-12',
}, {
  id: '5',
  title: 'Asia Music Festival',
  slug: 'asia-music-festival',
  image: 'https://images.unsplash.com/photo-1578946956088-940c3b502864',
  price: 33,
  location: 'Jakarta',
  date: '2023-13-12',
}, {
  id: '6',
  title: 'Bekasi Music Festival',
  slug: 'bekasi-music-festival',
  image: 'https://images.unsplash.com/photo-1583795484071-3c453e3a7c71',
  price: 80,
  location: 'Bandung',
  date: '2023-13-12',
}, {
  id: '7',
  title: 'Thrash Metal Festival',
  slug: 'thrash-metal-festival',
  image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063',
  price: 15,
  location: 'Bandung',
  date: '2023-13-12',
}]
