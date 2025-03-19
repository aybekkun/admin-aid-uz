export const transformToFormData = (values: Record<string, any>): FormData => {
	const formData = new FormData();

	if (values.image) {
		const image = values.image[0];
		if (image.originFileObj) {
			formData.append("image", image.originFileObj);
		}
	}
	if (values.file) {
		const file = values.file[0];

		if (file.originFileObj) {
			formData.append("file", file.originFileObj);
		}
	}
	// Handle all other fields
	Object.entries(values).forEach(([key, value]) => {
		// Skip the image field as we've already handled it
		if (key !== "image" && value !== undefined && value !== null) {
			formData.append(key, value.toString());
		}
	});

	return formData;
};

export const transformWithLang = <T extends Record<string, any>>(data: T): Record<string, any> => {
	const transformed: Record<string, any> = {};

	Object.entries(data).forEach(([key, value]) => {
		if (typeof value === "object" && value !== null) {
			Object.entries(value).forEach(([lang, text]) => {
				transformed[`${key}_${lang}`] = text;
			});
		} else {
			transformed[key] = value;
		}
	});

	return transformed;
};

export const urlToFile = async (imageUrl: string, filename: string): Promise<File> => {
	const response = await fetch(imageUrl);
	const blob = await response.blob();
	return new File([blob], filename, { type: blob.type });
};
