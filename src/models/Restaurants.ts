export class Restaurant {
  image: string
  title: string
  description: string
  detach: boolean
  type: string
  evaluation: number
  id: number

  constructor(
    image: string,
    title: string,
    description: string,
    detach: boolean,
    type: string,
    evaluation: number,
    id: number
  ) {
    this.description = description
    this.detach = detach
    this.evaluation = evaluation
    this.id = id
    this.image = image
    this.title = title
    this.type = type
  }
}
