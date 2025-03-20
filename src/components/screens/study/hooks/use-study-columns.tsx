import { TableActions } from "@/components/shared";
import { TStudy } from "@/services/study";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteStudyMutation } from "@/services/study";
import { Image } from "antd";

export const useStudyColumns = () => {
	const { mutate: deleteStudy, isPending } = useDeleteStudyMutation();
	const columns: ColumnsType<TStudy> = [
		{
			title: "Name",
			dataIndex: "name",
			key: "title",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},

		{
			title: "Image",
			dataIndex: "image",
			key: "image",
			render: (image) => <Image width={30} height={30} src={image} />,
		},
		{
			title: "Created At",
			dataIndex: "created_at",
			key: "created_at",
			render: formatDate,
		},
		{
			title: "Actions",
			key: "actions",
			render: (record: TStudy) => (
				<TableActions
					deleteItem={deleteStudy}
					isPending={isPending}
					type="study"
					id={record.id}
					record={record}
				/>
			),
		},
	];
	return columns;
};
