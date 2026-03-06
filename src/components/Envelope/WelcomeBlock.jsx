const WelcomeBlock = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] text-center overflow-hidden">
			<div className="">
				<img src="/img/welcome-block.png" alt="Приветственный блок" className='hidden sm:block w-full h-auto' />
				<img src="/img/welcome-block-mobile.png" alt="" className='sm:hidden block w-full h-auto' />
			</div>
		</section>
	);
}

export default WelcomeBlock;