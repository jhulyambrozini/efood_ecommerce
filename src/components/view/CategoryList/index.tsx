import Loader from '../../ui/Loader'
import Category from '../Category'

import { CategoryListContainer } from './styles'

import { useGetRestaurantsListQuery } from '../../../services/api'

const CategoryList = () => {
  const { data, isLoading } = useGetRestaurantsListQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <CategoryListContainer className="container">
      {data &&
        data.map((restaurant) => (
          <li key={restaurant.id}>
            <Category
              description={restaurant.descricao}
              image={restaurant.capa}
              title={restaurant.titulo}
              detach={restaurant.destacado}
              evaluation={restaurant.avaliacao}
              type={restaurant.tipo}
              id={restaurant.id}
            />
          </li>
        ))}
    </CategoryListContainer>
  )
}

export default CategoryList
