const Location = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 text-center">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
					Локация
				</h2>
				<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
					Место проведения
				</p>
				<p className="font-body text-base md:text-lg text-(--color-ink) mt-2">
					Wooden Villa, агрогородок Колодищи, Узлесная ул., 58, Беларусь
				</p>
			</div>

			<div className="flex flex-col items-center gap-8 md:gap-9">
				<div className="w-full max-w-3xl mx-auto rounded-[18px] md:rounded-[22px] overflow-hidden border border-(--color-border)/70 bg-white/70 shadow-soft">
					<a href="https://yandex.com/maps/-/CPqrmFN3"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/img/location.png"
							alt="Иллюстрация усадьбы Wooden Villa, место проведения праздника"
							className="block w-full h-auto"
							loading="lazy"
						/>
					</a>
				</div>

				<a
					href="https://yandex.com/maps/-/CPqrmFN3"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3.5 rounded-sm border border-(--color-border)/70 bg-(--color-surface) text-(--color-ink) font-ui text-[0.6rem] md:text-xs tracking-[0.28em] uppercase shadow-soft hover:bg-(--color-surface)/95 hover:shadow-soft/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-border) focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] transition-all duration-300 ease-out"
				>
					Посмотреть на карте
				</a>
			</div>
		</section>
	)
}

export default Location