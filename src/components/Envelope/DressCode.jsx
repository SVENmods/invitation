const DressCode = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 ">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
					Дресс-код
				</h2>
				<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
					нам будет особенно приятно, если вы поддержите атмосферу вечера
				</p>

			</div>

			<div className="flex md:flex-row flex-col md:items-stretch gap-8 md:gap-10">
				<div className="flex flex-col md:flex-1 justify-between text-left">
					<div className="space-y-3 md:space-y-4">
						<p className="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed max-w-xl">
							Выберите для образа спокойные светлые оттенки, которые будут гармонировать с оформлением
							праздника: молочный, бежевый, светло-голубой, нежно-розовый, серо-голубой.
						</p>

						<div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4 pt-1">
							<div className="tooltip-top tooltip" data-tip="Молочный">
								<span className="inline-block h-6 w-6 rounded-full bg-[#f7f2e8] border border-(--color-border)/50" />
							</div>
							<div className="tooltip-top tooltip" data-tip="Бежевый">
								<span className="inline-block h-6 w-6 rounded-full bg-[#ead9c0] border border-(--color-border)/50" />
							</div>
							<div className="tooltip-top tooltip" data-tip="Светло-голубой">
								<span className="inline-block h-6 w-6 rounded-full bg-[#c8d9f2] border border-(--color-border)/50" />
							</div>
							<div className="tooltip-top tooltip" data-tip="Нежно-розовый">
								<span className="inline-block h-6 w-6 rounded-full bg-[#f5cfd7] border border-(--color-border)/50" />
							</div>
							<div className="tooltip-top tooltip" data-tip="Серо-голубой">
								<span className="inline-block h-6 w-6 rounded-full bg-[#c5ced8] border border-(--color-border)/50" />
							</div>
						</div>
					</div>

					<div className="space-y-3 mt-auto pt-4 md:pt-6">
						<div className="divider" />
						<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-xl">
							Пожалуйста, избегайте ярких неоновых цветов и крупных принтов — так все гости будут выглядеть
							гармонично на общих фотографиях.
						</p>
					</div>
				</div>


				<div className="flex justify-center w-full md:w-auto">
					<div className="w-full md:w-auto max-w-xs md:max-w-sm">
						<div className="w-full rounded-[18px] md:rounded-[22px] overflow-hidden border border-(--color-border)/70 bg-white/70 shadow-soft">
							<img
								src="/img/dress-code.png"
								alt="Подсказка по дресс-коду для гостей"
								className="block w-full h-auto"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default DressCode