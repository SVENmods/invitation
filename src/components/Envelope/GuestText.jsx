import DateCounter from './DateCounter';

const GuestText = () => {
	return (
		<>
			<section className="relative w-full overflow-hidden bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10">
				<div
					aria-hidden="true"
					className="right-[-2%] bottom-[-6%] absolute opacity-10 md:opacity-30 w-2/3 md:w-1/2 lg:w-[58%] h-2/3 md:h-3/4 lg:h-[95%] pointer-events-none select-none"
					style={{
						backgroundImage: "url('/img/counter-bg.png')",
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right bottom',
						backgroundSize: 'contain',
					}}
				/>
				<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
					<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
						Дорогие родные и близкие!
					</h2>
				</div>
				<div className="flex flex-col items-center text-center">
					<p class="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed max-w-xl">
						В нашей жизни скоро состоится важное и радостное для нас событие - наша свадьба! Мы вас очень любим и будем счастливы, если вы проведете вместе с нами этот особенный день.
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<p class="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
						До нашей свадьбы осталось
					</p>
					<DateCounter />
				</div>
				<div className="text-center">
					<p class="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed">
						Приглашаем вас разделить с нами радость этого дня.
					</p>
				</div>
			</section>
		</>
	);
}

export default GuestText;