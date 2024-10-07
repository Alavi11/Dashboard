import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"پروفایل"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='/public/profile.jpg'
					className='rounded-full w-20 h-20 object-cover ml-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>احسان علوی</h3>
					<p className='text-gray-400'>e.alavi1380@gmail.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				ویرایش پروفایل
			</button>
		</SettingSection>
	);
};
export default Profile;
