import { TableActions } from "@/components/shared";
import { TProjects } from "@/services/projects";
import { formatDate } from "@/utils";

import { ColumnsType } from "antd/es/table";
import { useDeleteProjectsMutation } from "@/services/projects";
import { Image } from "antd";

export const useProjectsColumns = () => {
	const { mutate: deleteProjects, isPending } = useDeleteProjectsMutation();
	const columns: ColumnsType<TProjects> = [
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
			render: (record: TProjects) => (
				<TableActions
					deleteItem={deleteProjects}
					isPending={isPending}
					type="projects"
					id={record.id}
					record={record}
				/>
			),
		},
	];
	return columns;
};
