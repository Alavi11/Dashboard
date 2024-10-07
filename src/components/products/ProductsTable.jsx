import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Mac Book Pro", category: "لپ تاپ", price: "850,000,000 ریال" , sales: 1200 },
	{ id: 2, name: "Asus", category: "لپ تاپ", price: "850,000,000 ریال" , sales: 1200 },
	{ id: 3, name: "HP", category: "لپ تاپ", price: "850,000,000 ریال" , sales: 1200 },
	{ id: 4, name: "Dell", category: "لپ تاپ", price: "850,000,000 ریال" , sales: 1200 },
	{ id: 5, name: "Mac Book Air", category: "لپ تاپ", price: "850,000,000 ریال" , sales: 1200 },

];

const ProductsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>لیست محصولات</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='جستوجو محصول ...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
								نام محصول
							</th>
							<th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
								دسته بندی
							</th>
							<th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
								قیمت
							</th>
							<th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
								فروش
							</th>
							<th className='px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider'>
								عملیات
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										src='/public/laptop.jpg'
										className='size-20 rounded-full'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.price}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 ml-3'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default ProductsTable;
