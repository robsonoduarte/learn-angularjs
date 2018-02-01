export interface Restaurant {
  id: string
  name: string
  category: string
  deliveryEstimate: string
  rating: number
  imagePath: string
  about: string
  hours: string
}

export interface Review{
  rating: number
  name: string
  date: string
  comments: string
}
