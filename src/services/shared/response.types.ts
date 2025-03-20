import { AxiosError } from "axios";

export type TResponse<T> = {
	message?: string;
	data: T[];
	pagination: TPagination;
};

export type TResponseData<T> = {
	message?: string;
	data: T[];
};

export type TResponseSingleData<T> = {
	message?: string;
	data: T;
};

export type TResponseError = AxiosError<{
	message?: string;
	errors?: string[];
}>;

export type TPagination = {
	count: number;
	next?: string | null;
	previous?: string | null;
};

