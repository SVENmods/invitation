import DateCounter from './DateCounter';
const DetailsBlock = () => {
	return (
		<section className="relative overflow-hidden w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 ">
			<div
				aria-hidden="true"
				className="right-[-2%] bottom-[-3%] z-1 absolute opacity-10 md:opacity-30 w-[130%] sm:w-[120%] md:w-[112%] lg:w-[106%] h-[130%] sm:h-[120%] md:h-[112%] lg:h-[106%] pointer-events-none select-none"
				style={{
					backgroundImage: "url('/img/details-bg.webp')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'right bottom',
					backgroundSize: 'contain',
				}}
			/>
			<div className="z-2 relative flex flex-col space-y-3 md:space-y-4">
				<div className="mb-8 md:mb-10 text-center">
					<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
						Детали
					</h2>
				</div>
				<div className="">
					<div className="text-center">
						<h4 className='font-ui text-(--color-ink-muted) text-xl tracking-[0.24em] '>
							До&nbsp;нашей свадьбы осталось
						</h4>
					</div>
					<div className="mt-6">
						<DateCounter />
					</div>
				</div>
				<div className="flex flex-col items-center mt-8">
					<div className="flex flex-row items-start gap-3 w-full max-w-3xl">
						<div className="">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-(--color-ink)  lg:size-16 size-12">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
							</svg>
						</div>
						<div className="flex justify-center">
							<p className="font-body text-base md:text-lg text-(--color-ink-muted) leading-relaxed text-left">
								Мы очень любим детей и&nbsp;однажды сами станем родителями, но формат нашей свадебной вечеринки не&nbsp;подразумевает присутствия маленьких гостей. Будем вам благодарны, если вы заранее позаботитесь о&nbsp;том, с&nbsp;кем оставить детей в&nbsp;этот день.
							</p>
						</div>
					</div>
					<div className="w-full max-w-3xl">
						<div className="divider" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default DetailsBlock;