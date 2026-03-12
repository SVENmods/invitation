const DressCode = () => {
	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10 ">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
					Дресс-код
				</h2>
				{/* <p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
					нам будет особенно приятно, если вы поддержите атмосферу вечера
				</p> */}

			</div>

			<div className="flex md:flex-row flex-col md:items-stretch gap-8 md:gap-10">
				<div className="flex flex-col md:flex-1 justify-between text-left">
					<div className="flex justify-center">
						<div className="space-y-3 md:space-y-4 w-full max-w-3xl">
							<p className="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed max-w-xl">
								Выберите для образа спокойные темные оттенки, которые будут гармонировать с оформлением
								праздника: черный, коричневый, светло-кофейный, мятный, зеленый, синий.
							</p>
							<div className="pt-1">
								{/* Кружки остаются для md+ как сейчас */}
								<div className="hidden md:flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4">
									<div className="tooltip-top tooltip" data-tip="Черный">
										<span className="inline-block h-6 w-6 rounded-full bg-[#0f1213] border border-(--color-border)/50" />
									</div>
									<div className="tooltip-top tooltip" data-tip="Коричневый">
										<span className="inline-block h-6 w-6 rounded-full bg-[#735c48] border border-(--color-border)/50" />
									</div>
									<div className="tooltip-top tooltip" data-tip="Светло-кофейный">
										<span className="inline-block h-6 w-6 rounded-full bg-[#b5a184] border border-(--color-border)/50" />
									</div>
									<div className="tooltip-top tooltip" data-tip="Мятный">
										<span className="inline-block h-6 w-6 rounded-full bg-[#b7d3ba] border border-(--color-border)/50" />
									</div>
									<div className="tooltip-top tooltip" data-tip="Зеленый">
										<span className="inline-block h-6 w-6 rounded-full bg-[#758a6c] border border-(--color-border)/50" />
									</div>
									<div className="tooltip-top tooltip" data-tip="Синий">
										<span className="inline-block h-6 w-6 rounded-full bg-[#4A89DC] border border-(--color-border)/50" />
									</div>
								</div>

								{/* На мобильных показываем карточки с двумя оттенками и названием цвета */}
								<div className="md:hidden gap-3 grid grid-cols-2 mx-auto max-w-xs">
									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#111827] w-1/2" />
											<div className="bg-[#020617] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Черный
											</p>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#4A89DC] w-1/2" />
											<div className="bg-[#6CA0E8] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Синий
											</p>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#735c48] w-1/2" />
											<div className="bg-[#5b4633] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Коричневый
											</p>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#b5a184] w-1/2" />
											<div className="bg-[#d1c0a3] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Светло-кофейный
											</p>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#b7d3ba] w-1/2" />
											<div className="bg-[#d7e7d5] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Мятный
											</p>
										</div>
									</div>

									<div className="rounded-xl overflow-hidden border border-(--color-border)/70 bg-white/80 shadow-soft text-center">
										<div className="flex h-10">
											<div className="bg-[#758a6c] w-1/2" />
											<div className="bg-[#8fa384] w-1/2" />
										</div>
										<div className="py-2">
											<p className="font-ui text-[0.8rem] text-(--color-ink)">
												Зелёный
											</p>
										</div>
									</div>


								</div>
							</div>
						</div>
					</div>

					{/* <picture>
						<source media="(min-width: 1024px)" srcSet="/img/dress-code-desktop.png" />
						<img src="/img/dress-code-mobile.png" alt="Дресс-код" className="block mx-auto w-full max-w-3xl h-auto" />
					</picture> */}
					<img src="/img/dress-code-desktop.png" alt="Дресс-код" className="hidden md:block mx-auto w-full max-w-3xl h-auto" />

					<div className="space-y-3 mt-auto pt-4 md:pt-6">
						<div className="divider" />
						<div className="flex justify-center">
							<p className="font-body text-xs md:text-sm text-(--color-ink-muted) leading-relaxed max-w-3xl">
								Для нас главное - ваше присутствие! Но нам будет приятно, если в своих нарядах вы поддержите цветовую гамму нашей свадьбы.
							</p>
						</div>
					</div>
				</div>


				{/* <div className="flex justify-center w-full md:w-auto">
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
				</div> */}

			</div>
		</section>
	)
}

export default DressCode