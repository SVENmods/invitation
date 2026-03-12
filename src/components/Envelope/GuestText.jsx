import DateCounter from './DateCounter';

const GuestText = () => {
	return (
		<>
			<section className="relative w-full overflow-hidden bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 ">
				<div
					aria-hidden="true"
					className="right-[-2%] bottom-[-6%] z-1 absolute opacity-10 md:opacity-30 w-2/3 md:w-1/2 lg:w-[58%] h-2/3 md:h-3/4 lg:h-[95%] pointer-events-none select-none"
					style={{
						backgroundImage: "url('/img/counter-bg.png')",
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right bottom',
						backgroundSize: 'contain',
					}}
				/>
				<div className="z-2 relative">
					<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
						<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
							Дорогие родные и близкие!
						</h2>
					</div>
					<div className="flex justify-center text-left">
						<p className="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed max-w-3xl">
							В нашей жизни скоро состоится важное и радостное для нас событие - наша свадьба! Мы вас очень любим и будем счастливы, если вы проведете вместе с нами этот особенный день.
						</p>
					</div>
					<div className="flex flex-col items-center gap-3 md:gap-4 mt-12">
						<div className="flex flex-col items-center gap-2 md:gap-3 text-(--color-ink)">
							<p className="font-ui text-xs md:text-sm uppercase tracking-[0.22em]">
								Ию<span className="decoration-2 underline underline-offset-4">ль</span>
							</p>
							<div className="grid grid-cols-7 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-2.5 md:gap-x-4 md:gap-y-3 font-ui text-(--color-ink)">
								{['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
									<span key={day} className="text-[0.7rem] sm:text-sm md:text-base text-center uppercase">
										{day}
									</span>
								))}
								{['06', '07', '08', '09', '10', '11'].map((date) => (
									<span key={date} className="flex justify-center items-center row-start-2 h-8 sm:h-9 md:h-10 text-[0.75rem] sm:text-base md:text-lg">
										{date}
									</span>
								))}
								<span className="relative flex justify-center items-center row-start-2 h-8 sm:h-9 md:h-10">
									<span className="z-10 relative text-[0.75rem] sm:text-base md:text-lg">12</span>
									<svg
										className="absolute md:right-[-12px] right-[-11px] -bottom-px  m-auto z-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-(--color-ink)"
										viewBox="0 0 36 32"
										fill="none"
										aria-hidden="true"
									>
										<path
											d="M18 30.5C16.6 29.2 10.2 23.4 7.4 20.8C4.4 18 2 15.4 2 11.6C2 7.4 5 4.5 8.9 4.5C11.7 4.5 14.2 6.1 15.5 8.2C16.8 6.1 19.3 4.5 22.1 4.5C26 4.5 29 7.4 29 11.6C29 15.4 26.6 18 23.6 20.8C20.8 23.4 14.4 29.2 13 30.5"
											stroke="currentColor"
											strokeWidth="2.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</div>
						</div>
						{/* <p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
							До нашей свадьбы осталось
						</p>
						<DateCounter /> */}
					</div>
					{/* <div className="mt-3 text-center">
						<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed">
							Приглашаем вас разделить с нами радость этого дня.
						</p>
					</div> */}
				</div>
			</section>
		</>
	);
}

export default GuestText;