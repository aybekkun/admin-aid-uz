export type TNews = {
	id: number;
	title: string;
	description: string;
	content: string;
	image: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TNewsWithLang = {
	id: number;
	title: {
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
	content: {
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

export type TNewsForm = {
	title_en: string;
	title_ru: string;
	title_uz: string;
	title_kaa: string;
	description_en: string;
	description_ru: string;
	description_uz: string;
	description_kaa: string;
	content_en: string;
	content_ru: string;
	content_uz: string;
	content_kaa: string;
	image: File;
};
