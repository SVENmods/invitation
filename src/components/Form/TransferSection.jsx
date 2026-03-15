const TransferSection = ({ register, errors }) => {
	return (
		<div className="w-full">
			<div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
				<div className="space-y-3 md:space-y-4">
					<div className="">
						<p className="font-body text-sm md:text-base text-(--color-ink)">
							Трансфер к площадке
						</p>
					</div>
					<div className="flex md:flex-row flex-col gap-4">
						<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
							<input
								type="radio"
								value="transfer"
								className="radio radio-sm"
								{...register('transferTo', {
									required: 'Выберите вариант трансфера',
								})}
							/>
							<span>На&nbsp;трансфере</span>
						</label>
						<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
							<input
								type="radio"
								value="self"
								className="radio radio-sm"
								{...register('transferTo', {
									required: 'Выберите вариант трансфера',
								})}
							/>
							<span>Самостоятельно</span>
						</label>
					</div>
					{errors.transferTo && (
						<p className="mt-1 text-red-500 text-xs">
							{errors.transferTo.message}
						</p>
					)}
				</div>

				<div className="space-y-3 md:space-y-4">
					<div className="">
						<p className="font-body text-sm md:text-base text-(--color-ink)">
							Трансфер обратно
						</p>
					</div>
					<div className="flex md:flex-row flex-col gap-4">
						<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
							<input
								type="radio"
								value="transfer"
								className="radio radio-sm"
								{...register('transferBack', {
									required: 'Выберите вариант трансфера',
								})}
							/>
							<span>На&nbsp;трансфере</span>
						</label>
						<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
							<input
								type="radio"
								value="self"
								className="radio radio-sm"
								{...register('transferBack', {
									required: 'Выберите вариант трансфера',
								})}
							/>
							<span>Самостоятельно</span>
						</label>
					</div>
					{errors.transferBack && (
						<p className="mt-1 text-red-500 text-xs">
							{errors.transferBack.message}
						</p>
					)}
				</div>
			</div>
			<div className="mt-5">
				<p className="font-body text-xs text-(--color-ink-muted) leading-relaxed max-w-xl">
					*Самостоятельно&nbsp;— имеется небольшая парковка на&nbsp;территории площадки <br />
					*На&nbsp;трансфере туда/обратно&nbsp;— трансфер осуществляется от/до станции метро, подробности сможем уточнить позже
				</p>
			</div>
		</div>
	)
}

export default TransferSection

