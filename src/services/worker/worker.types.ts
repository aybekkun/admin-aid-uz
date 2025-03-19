export type TWorker = {
	id: number;
	full_name: string;
	description: string;
	position: string;
	image: string;
	created_at: Date;
	updated_at: Date;
	slug: string;
};

export type TWorkerWithLang = {
	id: number;
	full_name: {
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
	position: {
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

export type TWorkerForm = {
	full_name_en: string;
	full_name_ru: string;
	full_name_uz: string;
	full_name_kaa: string;
	description_en: string;
	description_ru: string;
	description_uz: string;
	description_kaa: string;
	position_en: string;
	position_ru: string;
	position_uz: string;
	position_kaa: string;
	image: File;
};
