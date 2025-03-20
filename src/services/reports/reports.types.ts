export type TReports = {
	id: number;
	name: string;
	file: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TReportsWithLang = {
	id: number;
	name: {
		en: string;
		ru: string;
		uz: string;
		kaa: string;
	};
	file: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TReportsForm = {
	name_en: string;
	name_ru: string;
	name_uz: string;
	name_kaa: string;
	file: File;
};
