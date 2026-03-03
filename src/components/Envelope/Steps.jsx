const Steps = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 text-center">

			<div className="space-y-4 md:space-y-6 text-center">
				<div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
					<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
						Шаги дня
					</h2>
					<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
						как будет проходить наш праздник
					</p>

				</div>


				<div className="flex justify-center w-full">
					<ul className="w-full max-w-3xl md:max-w-4xl steps steps-vertical md:steps-horizontal">
						<li className="md:flex-1 step">
							<div className="flex flex-col items-start md:items-center gap-1 md:gap-2 mt-3 md:mt-4 text-left md:text-center">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Сбор гостей
								</p>

								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) mt-1 md:mt-2 leading-relaxed max-w-xs mx-0 md:mx-auto">
									Просим взять с собой хорошее настроение и свои улыбки.
								</p>

							</div>
						</li>
						{/* [--step-bg:red] before:[--step-bg:red] */}
						<li className="md:flex-1 step">
							<div className="flex flex-col items-start md:items-center gap-1 md:gap-2 mt-3 md:mt-4 text-left md:text-center">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Церемония
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) mt-1 md:mt-2 leading-relaxed max-w-xs mx-0 md:mx-auto">
									Вы станете свидетелями трогательного момента. Приготовьте платочки.
								</p>
							</div>
						</li>

						<li className="md:flex-1 step">
							<div className="flex flex-col items-start md:items-center gap-1 md:gap-2 mt-3 md:mt-4 text-left md:text-center">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Окончание вечера
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) mt-1 md:mt-2 leading-relaxed max-w-xs mx-0 md:mx-auto">
									Время для красивого <br /> завершения вечера.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Steps