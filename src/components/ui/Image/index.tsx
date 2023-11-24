import { removeLoading } from '../../../utils'

type ImageProps = {
  alt: string | undefined
  src: string | undefined
}

const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      onLoad={removeLoading}
      className="loading"
      {...props}
      width={100}
      height={100}
    />
  )
}

export default Image
