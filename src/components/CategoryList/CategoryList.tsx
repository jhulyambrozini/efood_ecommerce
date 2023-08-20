import Category from "../Category/Category"
import { Container } from "./styles"

import { Restaurant } from "../../models/Restaurants"

type Props = {
  restaurants: Restaurant[]
}

const CategorytList = ({restaurants}: Props) => {
  return (
    <Container>
      {restaurants.map(r => (
      <Category
        key={r.id}
        description={r.description}
        image={r.image}
        title={r.title}
        detach={r.detach}
        evaluation={r.evaluation}
        type={r.type}
      />
      ))}
    </Container>
  )
}

export default CategorytList
