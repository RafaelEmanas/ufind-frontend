import { z } from 'zod';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const GetItemsQuerySchema = z.object({
	page: z.coerce.number().int().gte(1).default(1),
	search: z.string().optional(),
	location: z.string().optional(),
	startDate: z.string().regex(dateRegex).optional(),
	endDate: z.string().regex(dateRegex).optional(),
	addIsClaimed: z.coerce.boolean().optional()
});

export const UserSignupFormSchema = z.object({
	name: z.string().min(7, { message: "Este campo deve ter, no mínimo, 7 caracteres." }).max(50, { message: "Este campo deve ter, no máximo 50, caracteres" }),
	email: z.email({ message: "" }).endsWith(".ufam.edu.br", { message: "Por favor, use seu email institucional." }),
	password: z.string().min(8, { message: "A senha deve ter, no mínimo, 8 caracteres." })
})

export const UserSigninFormSchema = z.object({
	email: z.email({ message: "" }).endsWith(".ufam.edu.br", { message: "Por favor, use seu email institucional." }),
	password: z.string()
})