import { namePattern } from './validationPatterns'

const PartnerFields = ({ register, errors, withPartner }) => {
	if (!withPartner) return null

	return (
		<div className="space-y-3 md:space-y-4 mt-4">
			<p className="font-body text-xs md:text-sm text-(--color-ink-muted)">
				Пожалуйста, укажите имя и&nbsp;фамилию партнёра.
			</p>
			<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
				<div className="space-y-1">
					<label className="font-body text-xs md:text-sm text-(--color-ink)">
						Имя партнера
					</label>
					<input
						type="text"
						className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
						{...register('partner.firstName', {
							required: 'Введите имя партнера',
							maxLength: {
								value: 100,
								message: 'Имя партнера не должно превышать 100 символов',
							},
							pattern: {
								value: namePattern,
								message: 'Допустимы только буквы, пробел, дефис и апостроф',
							},
							validate: (value) => {
								const trimmed = value?.trim() || ''
								if (!trimmed) {
									return 'Введите имя партнера'
								}
								if (!/[A-Za-zА-Яа-яЁё]/.test(trimmed)) {
									return 'Имя партнера должно содержать хотя бы одну букву'
								}
								return true
							},
						})}
						placeholder="Введите имя"
					/>
					{errors.partner?.firstName && (
						<p className="mt-1 text-red-500 text-xs">
							{errors.partner.firstName.message}
						</p>
					)}
				</div>

				<div className="space-y-1">
					<label className="font-body text-xs md:text-sm text-(--color-ink)">
						Фамилия партнера
					</label>
					<input
						type="text"
						className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
						{...register('partner.lastName', {
							required: 'Введите фамилию партнера',
							maxLength: {
								value: 100,
								message: 'Фамилия партнера не должна превышать 100 символов',
							},
							pattern: {
								value: namePattern,
								message: 'Допустимы только буквы, пробел, дефис и апостроф',
							},
							validate: (value) => {
								const trimmed = value?.trim() || ''
								if (!trimmed) {
									return 'Введите фамилию партнера'
								}
								if (!/[A-Za-zА-Яа-яЁё]/.test(trimmed)) {
									return 'Фамилия партнера должна содержать хотя бы одну букву'
								}
								return true
							},
						})}
						placeholder="Введите фамилию"
					/>
					{errors.partner?.lastName && (
						<p className="mt-1 text-red-500 text-xs">
							{errors.partner.lastName.message}
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default PartnerFields

