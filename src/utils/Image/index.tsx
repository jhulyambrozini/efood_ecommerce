import { removeLoading } from '..'

export type ImageProps = {
  alt: string | undefined
  src: string | undefined
  width?: number
  height?: number
}

const Image = ({
  src,
  alt,
  width = 100,
  height = 100,
  ...props
}: ImageProps) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    onLoad={removeLoading}
    className="loading"
    width={width}
    height={height}
    {...props}
  />
)

export default Image
