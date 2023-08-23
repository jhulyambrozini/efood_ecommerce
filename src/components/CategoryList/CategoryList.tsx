import Category from "../Category/Category"
import { useGetRestaurantsListQuery } from "../../services/api"
import { Container } from "./styles"

const CategorytList = () => {
  const {data} = useGetRestaurantsListQuery()

  return (
    <Container className="container">
      {data && data.map(r => (
        <li key={r.id}>
          <Category
            key={r.id}
            description={r.descricao}
            image={r.capa}
            title={r.titulo}
            detach={r.destacado}
            evaluation={r.avaliacao}
            type={r.tipo}
            id={r.id}
          />
        </li>
      ))}
    </Container>
  )
}

export default CategorytList
