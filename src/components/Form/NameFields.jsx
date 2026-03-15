import { namePattern } from './validationPatterns'

const NameFields = ({ register, errors }) => {
	return (
		<div className="space-y-3 md:space-y-4 w-full">
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
							maxLength: {
								value: 100,
								message: 'Имя не должно превышать 100 символов',
							},
							pattern: {
								value: namePattern,
								message: 'Допустимы только буквы, пробел, дефис и апостроф',
							},
							validate: (value) => {
								const trimmed = value?.trim() || ''
								if (!trimmed) {
									return 'Введите имя'
								}
								if (!/[A-Za-zА-Яа-яЁё]/.test(trimmed)) {
									return 'Имя должно содержать хотя бы одну букву'
								}
								return true
							},
						})}
						placeholder="Введите имя"
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
							maxLength: {
								value: 100,
								message: 'Фамилия не должна превышать 100 символов',
							},
							pattern: {
								value: namePattern,
								message: 'Допустимы только буквы, пробел, дефис и апостроф',
							},
							validate: (value) => {
								const trimmed = value?.trim() || ''
								if (!trimmed) {
									return 'Введите фамилию'
								}
								if (!/[A-Za-zА-Яа-яЁё]/.test(trimmed)) {
									return 'Фамилия должна содержать хотя бы одну букву'
								}
								return true
							},
						})}
						placeholder="Введите фамилию"
					/>
					{errors.lastName && (
						<p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default NameFields

