import { TNews } from "@/services/news";
import { ColumnsType } from "antd/es/table";

export const useNewsColumns = () => {
	const columns: ColumnsType<TNews> = [
		{
			title: "Tittke",
			dataIndex: "title",
			key: "title",
		},
	];
	return columns;
};
