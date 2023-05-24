import { useSearchParams } from "react-router-dom";
import axiosClient from "../axios";
import { useEffect, useState } from "react";
import ItemShowcase from "../Components/ItemShowcase";

export default function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(searchParams.get('p') ?? 1);
    const [lastPage, setLastPage] = useState(null);
    const [products, setProducts] = useState(null);

    const nextPage = () => {
        setPage((p) => p + 1);
        searchParams.set('p', (page == 1 ? '' : page));
        console.log(page +  1);
    }
    const prevPage = () => {
        setPage((p) => p - 1);
        searchParams.set('p', (page == 1 ? '' : page));
        console.log(page - 1);
    }

    useEffect(() => {
        axiosClient.get("/products?p="+page)
            .then(({data}) => {
                setProducts(data.data);
                setLastPage(data.last_page);
            })
            .catch(() => {
                console.log("Completely wrecked");
                setLastPage(1);
            })
            .finally(() =>
                setIsLoading(false)
            )
        }, [page,]
    )

    return (
        <div className="w-full h-24 items-center justify-center text-center">
            {isLoading && <h1 className="text-slate-500 text-[2em] p-8">Loading...</h1>}
            {!isLoading && <div className="grid grid-cols-4 gap-4 mx-6 mt-10">
                {products.map((item, key) => (
                    <ItemShowcase imagelink={import.meta.env.VITE_APP_URL + `/prod_img/${item.ID}.${item.PicFormat}`}
                    title={item.Name} price={item.Price} link={`/products/${item.ID}`} key={key}/>
                ))}
                </div>
            }
            <div className="flex flex-row justify-center my-8">
                <button onClick={() => {page <= 1 ? function(){} : prevPage()}}
                className={`${page <= 1 ? "bg-slate-50 text-gray-300 cursor-default" : "bg-slate-100 text-black hover:bg-slate-200"}
                 px-2 py-1 rounded font-medium transition duration-150 ease-out text-[1em] align-baseline`}>&lt;</button>
                <input type="text" disabled className="py-2 w-24 border-t border-b border-slate-300
                text-center" value={page}/>
                <button onClick={() => {page >= lastPage ? function(){} : nextPage()}}
                className={`${page >= lastPage ? "bg-slate-50 text-gray-300 cursor-default" : "bg-slate-100 text-black hover:bg-slate-200"}
                px-2 py-1 rounded font-medium transition duration-150 ease-out text-[1em] align-baseline`}>&gt;</button>
            </div>
        </div>
    )
}