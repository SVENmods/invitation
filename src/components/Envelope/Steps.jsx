const Steps = () => {
	return (
		<section className="relative w-full overflow-hidden bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 text-center">

			<div
				aria-hidden="true"
				className="right-[-2%] bottom-[-1%] absolute opacity-10 md:opacity-30 w-2/3 md:w-1/2 lg:w-[58%] h-2/3 md:h-3/4 lg:h-[95%] pointer-events-none select-none"
				style={{
					backgroundImage: "url('/img/steps-bg.png')",
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'right bottom',
					backgroundSize: 'contain',
				}}
			/>

			<div className="z-1 relative space-y-4 md:space-y-6 text-center">
				<div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
					<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
						Шаги дня
					</h2>
					<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
						как будет проходить наш праздник
					</p>

				</div>

				<div className="flex justify-center w-full">
					<div className="space-y-6 md:space-y-7 lg:space-y-8 w-full max-w-3xl md:max-w-4xl text-left">
						<div className="flex items-stretch gap-4 md:gap-6 lg:gap-8">
							<div className="flex items-start shrink-0">
								<p className="font-ui text-sm md:text-base lg:text-lg tracking-[0.18em] uppercase text-(--color-ink)">
									15:00
								</p>
							</div>
							<div className="m-0 text-2xl divider divider-horizontal divider-start" >👥</div>
							<div className="flex-1 space-y-2">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Сбор гостей
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-sm">
									С этого момента начинается наш праздник. Время пролетит незаметно за игристым и общением с другими гостями
								</p>
							</div>
						</div>

						<div className="flex items-stretch gap-4 md:gap-6 lg:gap-8">
							<div className="flex items-start shrink-0">
								<p className="font-ui text-sm md:text-base lg:text-lg tracking-[0.18em] uppercase text-(--color-ink)">
									15:45
								</p>
							</div>
							<div className="m-0 text-2xl divider divider-horizontal divider-start" > 💍</div>
							<div className="flex-1 space-y-2">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Церемония
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-sm">
									Вы станете свидетелями трогательного момента. Приготовьте платочки.
								</p>
							</div>
						</div>

						<div className="flex items-stretch gap-4 md:gap-6 lg:gap-8">
							<div className="flex items-start shrink-0">
								<p className="font-ui text-sm md:text-base lg:text-lg tracking-[0.18em] uppercase text-(--color-ink)">
									17:00
								</p>
							</div>
							<div className="m-0 text-2xl divider divider-horizontal divider-start" > 🍽️</div>
							<div className="flex-1 space-y-2">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Начало банкета
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-sm">
									Будет много танцев, веселья и, конечно, любви.								</p>
							</div>
						</div>

						<div className="flex items-stretch gap-4 md:gap-6 lg:gap-8">
							<div className="flex items-start shrink-0">
								<p className="font-ui text-sm md:text-base lg:text-lg tracking-[0.18em] uppercase text-(--color-ink)">
									23:00
								</p>
							</div>
							<div className="m-0 text-2xl divider divider-horizontal divider-start" > 🌙</div>
							<div className="flex-1 space-y-2">
								<p className="font-ui text-[0.65rem] md:text-xs tracking-[0.22em] uppercase text-(--color-ink-muted)">
									Окончание вечера
								</p>
								<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-sm">
									Финальные танцы, объятия и слова благодарности.
									Пусть этот вечер завершится красиво и останется в памяти у каждого надолго.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Steps