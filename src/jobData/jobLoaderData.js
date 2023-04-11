import { getjobCart } from "../utilities/localdb";
const cartjobLoader = async () => {
    const loadedJob = await fetch('/jobsData.json');

    const job = await loadedJob.json();
   
    const storedCart = getjobCart();

    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = job.find(pd => pd.id == id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }

    }

    // return [savedCart, job]
    return savedCart;
}
export default cartjobLoader;