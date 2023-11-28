import Loader from '../ui/Loader'
import Category from '../Category'

import { Container } from './styles'

import { useGetRestaurantsListQuery } from '../../services/api'

const CategorytList = () => {
  const { data, isLoading } = useGetRestaurantsListQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container className="container">
      {data &&
        data.map((r) => (
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
