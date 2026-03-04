import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
	cors({
		origin: process.env.CLIENT_ORIGIN || "*",
	})
);
app.use(express.json());

const transporter = nodemailer.createTransport({
	host: "smtp.hoster.by",
	port: 465,
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

app.post("/node", async (req, res) => {
	const data = req.body;

	if (!data || !data.firstName || !data.lastName || !data.attendance) {
		return res
			.status(400)
			.json({ success: false, message: "Отсутствуют обязательные поля формы." });
	}

	const isAttending = data.attendance === "yes";

	const subject = `RSVP: ${data.firstName} ${data.lastName} — ${isAttending ? "придёт" : "не придёт"
		}`;

	// Человекочитаемое тело письма
	const lines = [
		`Имя: ${data.firstName}`,
		`Фамилия: ${data.lastName}`,
		`Присутствие: ${isAttending ? "да" : "нет"}`,
	];

	if (data.message) {
		lines.push("", "Сообщение:", data.message);
	}

	if (isAttending) {
		lines.push("", `Количество гостей: ${data.guestCount || 1}`);

		if (Array.isArray(data.extraGuests) && data.extraGuests.length > 0) {
			lines.push("", "Дополнительные гости:");
			data.extraGuests.forEach((guest, index) => {
				lines.push(
					`${index + 2}. ${guest.firstName || ""} ${guest.lastName || ""}`.trim()
				);
			});
		}

		if (Array.isArray(data.drinks) && data.drinks.length > 0) {
			lines.push("", `Напитки: ${data.drinks.join(", ")}`);
		}

		if (data.transferTo) {
			lines.push(
				"Трансфер к площадке: " +
				(data.transferTo === "transfer" ? "на трансфере" : "самостоятельно")
			);
		}
		if (data.transferBack) {
			lines.push(
				"Трансфер обратно: " +
				(data.transferBack === "transfer" ? "на трансфере" : "самостоятельно")
			);
		}
	}

	const textBody = lines.join("\n");
	const htmlBody = `<pre style="font-family: 'Source Serif 4', Georgia, serif; white-space: pre-wrap; line-height: 1.6;">${textBody}</pre>`;

	try {
		await transporter.sendMail({
			from: `"Wedding RSVP" <${process.env.SMTP_USER}>`,
			to: process.env.SMTP_TO,
			subject,
			text: textBody,
			html: htmlBody,
		});

		return res.status(200).json({
			success: true,
			message: "Ответ успешно отправлен.",
		});
	} catch (error) {
		console.error("Ошибка отправки письма:", error);
		return res.status(500).json({
			success: false,
			message: "Не удалось отправить письмо. Попробуйте позже.",
		});
	}
});

app.get("/api/health", (req, res) => {
	res.json({ status: "ok" });
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`RSVP server listening on port ${PORT}`);
});