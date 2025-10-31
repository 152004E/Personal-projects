import imgProducto from "../assets/images/computador.webp"

export const ImgCard = () => {
  return (
      <img src={imgProducto} className="transition-all duration-500 hover:scale-[1.1] " alt="Producto" />
  )
}
