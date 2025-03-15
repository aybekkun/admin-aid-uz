export type TAuthResponse = {
	data: {
		phone: string;
		token: string;
		role: string;
	};
};

export type TAuthRegister = {
	phone: string;
	password: string;
};

export type TAuthLogin = {
	phone: string;
	password: string;
};
