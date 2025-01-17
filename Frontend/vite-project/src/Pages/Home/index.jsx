import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingContext } from "../../Context";

function Home() {
    const context = useContext(ShoppingContext)
    
    const renderView = () => {
          if(context.filteredItems?.length > 0){
            return (
              context.filteredItems?.map(item => (
                <Card
                  key={item.id}
                  data={item}
                />
              ))
            )
          }else{
            return (
              //className='flex font-bold text-3xl'
              <div className='font-bold text-3xl'><img className='absolute ml-80 mt-20' src="https://grupoleiros.com/static/product-not-found.png" alt="" /></div>
            )
          }
      }


    return (
        <Layout>
          <div className='flex justify-between'>
            <div className='bg-white rounded-full top-0'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input 
            type="text" 
            placeholder="Search a Product"
            value={context.SearchByTitle = null}
            className='ml-2 rounded-lg border p-4 mb-4 border-black w-96 focus:outline-none'
            onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
          </div>
          <div className="mt-6 grid gap-4 grid-cols-3 w-full max-w-screen-xl">
            {renderView()}
          </div>
          <ProductDetail/>
        </Layout>
    )
}
export default Home;