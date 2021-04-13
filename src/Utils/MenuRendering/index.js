import { Tooltip } from "@material-ui/core"
import { FaArchive, FaFileContract, FaHome, FaPlusCircle, FaCubes } from "react-icons/fa"
import AddItemModal from "../../Components/AddItemModal"
import AddProduct from "../../Components/AddProduct"
import Logs from "../../Components/Logs"
import Product from "../../Components/Product"
import HomeComponent from "../../Components/Home/"

export const handleMenuButtons = (setContent) => {
  return(
    <div className="Menu">
    <Tooltip title="Home" placement="right-end">
      <button className="IconButton" onClick={() => setContent('home')}>
        <FaHome color="white" size={40} />
      </button>
    </Tooltip>

    <Tooltip title="Produtos" placement="right-end">
      <button className="IconButton" onClick={() => setContent('products')}>
        <FaCubes color="white" size={40} />
      </button>
    </Tooltip>

    <Tooltip title="Adicionar Produto" placement="right-end">
      <button onClick={() => setContent('AddProduct')} className="IconButton">
        <FaPlusCircle color="white" size={40} />
      </button>
    </Tooltip>

    <Tooltip title="Logs" placement="right-end">
      <button className="IconButton" onClick={() => setContent('logs')}>
        <FaFileContract color="white" size={40} />
      </button>
    </Tooltip>

    <Tooltip title="Estoque" placement="right-end">
      <button className="IconButton" onClick={() => setContent('stock')}>
        <FaArchive color="white" size={40} />
      </button>
    </Tooltip>
  </div>
  )
}

export const handleContent = (content, productSku, productName, setProductSku, setProductName, setVisible, visible, search) => {
  if(content === 'products') {
    return(
      <>
        {          
          visible ?
          <AddItemModal setVisible={setVisible} productSku={productSku} productName={productName} />
          :
          <Product setVisible={setVisible} setProductSku={setProductSku} setProductName={setProductName} search={search} />
        }
      </>
    );
  }

  if(content === 'home') {
    return(
      <HomeComponent/>
    )
  }

  if(content === 'logs') {
    return(
      <Logs/>
    )
  }

  if(content === 'AddProduct') {
    return(
      <AddProduct/>
    )
  }
}
