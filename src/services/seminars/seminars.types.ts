export type TSeminars = {
	id: number;
	name: string;
	description: string;
	image: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TSeminarsWithLang = {
	id: number;
	name: {
		en: string;
		ru: string;
		uz: string;
		kaa: string;
	};
	description: {
		en: string;
		ru: string;
		uz: string;
		kaa: string;
	};
	image: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TSeminarsForm = {
	name_en: string;
	name_ru: string;
	name_uz: string;
	name_kaa: string;
	description_en: string;
	description_ru: string;
	description_uz: string;
	description_kaa: string;
	image: File;
};
