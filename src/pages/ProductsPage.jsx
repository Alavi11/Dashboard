import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";

import {DollarSign, Package } from "lucide-react";
import ProductsTable from "../components/products/ProductsTable";

const ProductsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='محصولات' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='مجموع محصولات' icon={Package} value={1234} color='#6366F1' />
					<StatCard name='مجموع فروش' icon={DollarSign} value={"543,210ریال"} color='#EF4444' />
				</motion.div>

				<ProductsTable />
			</main>
		</div>
	);
};
export default ProductsPage;
