const DrinksPreferences = ({ register, errors }) => {
	return (
		<div className="space-y-3 md:space-y-4 w-full">
			<p className="font-body text-sm md:text-base text-(--color-ink)">
				Ваши предпочтения по&nbsp;напиткам
			</p>
			<div className="flex flex-wrap gap-3 md:gap-4">
				{['Вино игристое', 'Шампанское', 'Виски', 'Водка', 'Безалкогольное'].map(
					(label) => (
						<label
							key={label}
							className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)"
						>
							<input
								type="checkbox"
								value={label}
								className="rounded-[3px] checkbox checkbox-sm"
								{...register('drinks', {
									validate: (value) =>
										value && value.length > 0
											? true
											: 'Выберите хотя бы один вариант',
								})}
							/>
							<span>{label}</span>
						</label>
					)
				)}
			</div>
			{errors.drinks && (
				<p className="mt-1 text-red-500 text-xs">{errors.drinks.message}</p>
			)}
		</div>
	)
}

export default DrinksPreferences

