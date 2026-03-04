import { useForm } from 'react-hook-form'

const namePattern = /^[A-Za-zА-Яа-яЁё\s'-]+$/
const textPattern = /^[0-9A-Za-zА-Яа-яЁё\s.,!?'"():;-]*$/

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			attendance: '',
			guestCount: 1,
			extraGuests: [],
			drinks: [],
			transferTo: '',
			transferBack: '',
			message: '',
		},
		shouldUnregister: true,
	})

	const attendance = watch('attendance')
	const guestCount = watch('guestCount') || 1

	const onSubmit = (values) => {
		// Если гость не приходит, отправляем только основные поля
		if (values.attendance !== 'yes') {
			const minimal = {
				firstName: values.firstName,
				lastName: values.lastName,
				attendance: values.attendance,
				message: values.message || '',
			}

			console.log('RSVP form data:', JSON.stringify(minimal, null, 2))
			return
		}

		// Обрезаем массив дополнительных гостей по выбранному количеству
		const count = Number(guestCount) || 1
		const normalized = {
			...values,
			guestCount: count,
			extraGuests:
				count > 1 && Array.isArray(values.extraGuests)
					? values.extraGuests.slice(0, count - 1)
					: [],
		}

		console.log('RSVP form data:', JSON.stringify(normalized, null, 2))
	}

	const renderExtraGuestFields = () => {
		const count = Number(guestCount) || 1
		if (count <= 1) return null

		const extra = []
		for (let i = 2; i <= count; i += 1) {
			const index = i - 2
			extra.push(
				<div key={i} className="gap-4 grid grid-cols-1 md:grid-cols-2">
					<div className="space-y-1">
						<label className="font-body text-xs md:text-sm text-(--color-ink)">
							Имя гостя {i}
						</label>
						<input
							type="text"
							className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
							{...register(`extraGuests.${index}.firstName`, {
								required: 'Введите имя гостя',
								pattern: {
									value: namePattern,
									message: 'Допустимы только буквы, пробел, дефис и апостроф',
								},
							})}
						/>
						{errors.extraGuests?.[index]?.firstName && (
							<p className="mt-1 text-red-500 text-xs">
								{errors.extraGuests[index].firstName.message}
							</p>
						)}
					</div>

					<div className="space-y-1">
						<label className="font-body text-xs md:text-sm text-(--color-ink)">
							Фамилия гостя {i}
						</label>
						<input
							type="text"
							className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
							{...register(`extraGuests.${index}.lastName`, {
								required: 'Введите фамилию гостя',
								pattern: {
									value: namePattern,
									message: 'Допустимы только буквы, пробел, дефис и апостроф',
								},
							})}
						/>
						{errors.extraGuests?.[index]?.lastName && (
							<p className="mt-1 text-red-500 text-xs">
								{errors.extraGuests[index].lastName.message}
							</p>
						)}
					</div>
				</div>
			)
		}

		return (
			<div className="space-y-3 md:space-y-4 mt-4">
				<p className="font-body text-xs md:text-sm text-(--color-ink-muted)">
					Пожалуйста, укажите имена и фамилии дополнительных гостей.
				</p>
				<div className="space-y-4 md:space-y-5">{extra}</div>
			</div>
		)
	}

	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em] uppercase text-(--color-ink)">
					Ответ на приглашение
				</h2>
				<p className="font-ui text-[0.55rem] md:text-xs tracking-[0.24em] uppercase text-(--color-ink-muted) text-center">
					Ждём вашего ответа
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-10">
				{/* Имя и фамилия */}
				<div className="space-y-3 md:space-y-4">
					<div className="gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2">
						<div className="space-y-1">
							<label className="font-body text-xs md:text-sm text-(--color-ink-muted)">
								Имя
							</label>
							<input
								type="text"
								className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
								{...register('firstName', {
									required: 'Введите имя',
									pattern: {
										value: namePattern,
										message: 'Допустимы только буквы, пробел, дефис и апостроф',
									},
								})}
							/>
							{errors.firstName && (
								<p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>
							)}
						</div>

						<div className="space-y-1">
							<label className="font-body text-xs md:text-sm text-(--color-ink-muted)">
								Фамилия
							</label>
							<input
								type="text"
								className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
								{...register('lastName', {
									required: 'Введите фамилию',
									pattern: {
										value: namePattern,
										message: 'Допустимы только буквы, пробел, дефис и апостроф',
									},
								})}
							/>
							{errors.lastName && (
								<p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
							)}
						</div>
					</div>
				</div>

				{/* Придёте ли вы */}
				<div className="space-y-3 md:space-y-4">
					<p className="font-body text-sm md:text-base text-(--color-ink)">
						Вы придёте на праздник?
					</p>
					<div className="flex md:flex-row flex-col gap-3 md:gap-6">
						<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
							<input
								type="radio"
								value="yes"
								className="radio radio-sm"
								{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
							/>
							<span>Да, с радостью буду</span>
						</label>
						<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
							<input
								type="radio"
								value="no"
								className="radio radio-sm"
								{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
							/>
							<span>К сожалению, не смогу</span>
						</label>
					</div>
					{errors.attendance && (
						<p className="mt-1 text-red-500 text-xs">{errors.attendance.message}</p>
					)}
				</div>

				{/* Поля, которые показываем только если гость придёт */}
				{attendance === 'yes' && (
					<>
						{/* Количество гостей и дополнительные поля */}
						<div className="space-y-3 md:space-y-4">
							<p className="font-body text-sm md:text-base  text-(--color-ink)">
								Количество гостей
							</p>
							<div className="w-full max-w-xs">
								<select
									className="select select-ghost w-full font-body text-sm md:text-base border-(--color-border)  focus:border-(--color-border) focus:outline-none "
									{...register('guestCount', {
										required: 'Укажите количество гостей',
										validate: (value) => {
											const num = Number(value)
											if (!num || Number.isNaN(num)) return 'Некорректное значение'
											if (num < 1 || num > 5) return 'Допустимо от 1 до 5 гостей'
											return true
										},
									})}
								>
									{[1, 2, 3, 4, 5].map((n) => (
										<option key={n} value={n} >
											{n}
										</option>
									))}
								</select>
								{errors.guestCount && (
									<p className="mt-1 text-red-500 text-xs">
										{errors.guestCount.message}
									</p>
								)}
							</div>

							{renderExtraGuestFields()}
						</div>

						{/* Предпочтения по напиткам */}
						<div className="space-y-3 md:space-y-4">
							<p className="font-body text-sm md:text-base text-(--color-ink)">
								Предпочтения по напиткам
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

						{/* Трансфер */}
						<div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2">
							<div className="space-y-3 md:space-y-4">
								<p className="font-body text-sm md:text-base text-(--color-ink)">
									Трансфер к площадке
								</p>
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
										<span>На трансфере</span>
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
								<p className="font-body text-sm md:text-base text-(--color-ink)">
									Трансфер обратно
								</p>
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
										<span>На трансфере</span>
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
					</>
				)}

				{/* Сообщение для пары */}
				<div className="space-y-3 md:space-y-4">
					<p className="font-body text-sm md:text-base text-(--color-ink)">
						Сообщение для пары (по желанию)
					</p>
					<textarea
						rows={4}
						maxLength={1000}
						className="w-full max-h-[500px] border border-(--color-border) bg-transparent rounded-sm px-3 py-2 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
						{...register('message', {
							maxLength: {
								value: 1000,
								message: 'Сообщение не должно превышать 1000 символов',
							},
							pattern: {
								value: textPattern,
								message:
									'Пожалуйста, не используйте специальные символы вроде < или > в сообщении',
							},
						})}
					/>
					{errors.message && (
						<p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
					)}
				</div>

				<div className="flex justify-center pt-2">
					<button
						type="submit"
						className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3.5 rounded-sm border border-(--color-border)/70 bg-(--color-surface) text-(--color-ink) font-ui text-[0.6rem] md:text-xs tracking-[0.28em] uppercase shadow-soft hover:bg-(--color-surface)/95 hover:shadow-soft/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-border) focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] transition-all duration-300 ease-out cursor-pointer"
					>
						Отправить ответ
					</button>
				</div>
			</form>
		</section>
	)
}

export default Form