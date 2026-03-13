import DateCounter from './DateCounter';
const CounterBlock = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 ">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
					До нашей свадьбы осталось
				</h2>
			</div>
			<div className="flex justify-center">
				<DateCounter />
			</div>
		</section>
	);
}

export default CounterBlock;