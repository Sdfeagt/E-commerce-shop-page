import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import ProductList from '@/components/ui/product-list'


export const revalidate = 0

const HomePage = async () => {
    const billboard = await getBillboard("b6b370b3-215c-41a3-8088-1b78cb8ee9da")
    const products = await getProducts({ isFeatured: true })
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
                <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                    <ProductList title="Featured products" items={products} />
                </div>
            </div>

        </Container>
    )
}

export default HomePage