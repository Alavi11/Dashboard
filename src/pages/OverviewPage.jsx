import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";

const OverviewPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='نمای کلی' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='مجموع فروش' icon={Zap} value='12,345,000,000ریال' color='#6366F1' />
					<StatCard name='کاربران جدید' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard name='مجموع محصولات' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard name='درصد رشد' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>

				{/* CHARTS */}

				<div className='grid gap-8'>
					<SalesOverviewChart />
				</div>
			</main>
		</div>
	);
};
export default OverviewPage;
