import Image from '../images/email-subscribe/image.jpg';

const EmailSubscribe = () => {
	return (
		// Background Container
		<div className='flex items-center justify-center h-screen bg-zinc-700'>
			{/* Card */}
			<div className='bg-zinc-800 p-2 mx-6 rounded-2xl overflow-hidden'>
				{/* Flex Container */}
				<div className='flex flex-col md:flex-row rounded-l-xl'>
					{/* Image */}
					<img
						src={Image}
						alt='email'
						className='object-fit rounded-xl h-80 md:h-60 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-150 cursor-pointer'
					/>
					{/* Content */}
					<div className='p-6 md:p-12'>
						<h2 className='font-serif text-xl font-medium text-white text-center md:text-left'>
							Get diet and fitness tips in your inbox
						</h2>
						<p className='max-w-xs text-xs my-4 tracking-wide leading-5 text-center md:text-left text-white'>
							Eat better and exercise better. Sign up for the Diet&Fitness
							newsletter.
						</p>
						{/* Input */}
						<div className='flex items-center justify-center md:space-x-4 md:flex-row md:space-y-0'>
							<input
								type='text'
								placeholder='Enter your email address'
								className='p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-500 rounded-md placeholder:text-xs placeholder:text-center md:text-left md:placeholder:text-left focus:outline-none'
							/>
							<button className='px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailSubscribe;
